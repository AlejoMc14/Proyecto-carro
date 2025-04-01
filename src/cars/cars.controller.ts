import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-cars.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get('id/:id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findOneById(id);
    }

    @Get('marca/:marca')
    getCarByMarca(@Param('marca') marca: string) {
        return this.carsService.findOneByBrand(marca);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch('id/:id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: Partial<CreateCarDto>
    ) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete('id/:id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.Delete(id);
    }
}
