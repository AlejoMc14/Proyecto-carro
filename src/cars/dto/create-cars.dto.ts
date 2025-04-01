import { IsString, MinLength, IsInt, Min, Max } from "class-validator";

export class CreateCarDto {
    
    @IsString()
    readonly marca: string;

    @IsString()
    @MinLength(3)
    readonly modelo: string;

    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    readonly año: number;

    @IsInt()
    @Min(0)
    readonly kilometraje: number;

    @IsString()
    readonly color: string;

    @IsString()
    readonly tipo_combustible: string;

    @IsString()
    readonly transmision: string;
}
