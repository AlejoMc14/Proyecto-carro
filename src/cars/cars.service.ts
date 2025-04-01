import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { Car } from './interface/cars-interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-cars.dto';

@Injectable()
export class CarsService {
   
    private cars: Car[] = [
        {
            id: uuid(),
            marca: "Toyota",
            modelo: "Corolla",
            año: 2020,
            kilometraje: 35000,
            color: "Blanco",
            tipo_combustible: "Gasolina",
            transmision: "Automática"
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Carro '${id}'no existe`);
        }
        return car;
    }

    findOneByBrand(marca: string) {
        return this.cars.filter(car => car.marca === marca);
    }

    create(createCarDto: CreateCarDto) {
        const Car: Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(Car);
        return Car;
    }
    Delete(id: string) {
        const carIndex = this.cars.findIndex(car => car.id === id);
        if (carIndex === -1) {
          throw new NotFoundException('carro no encontrado');
        }
        this.cars.splice(carIndex, 1);
        return { message: 'Carro a sido eliminado' };
      }
      
    update(id: string, updateFields: Partial<Car>) {
        const car = this.findOneById(id);
        if (!car) {
          throw new NotFoundException('Car not found');
        }
        Object.assign(car, updateFields);
        return car;
      }
      
}    
