export interface Menu {
    id: number;
    nombre: string;
    descripcion: string;
    platos: Plato[];
}

export interface Plato {
    receta_id: number;
    porciones: number;
}