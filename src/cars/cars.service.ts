import { Injectable, NotFoundException } from '@nestjs/common';
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
            throw new NotFoundException(`Car with ID '${id}' does not exist!`);
        }
        return car;
    }

    findOneByBrand(marca: string) {
        return this.cars.filter(car => car.marca === marca);
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }
}
