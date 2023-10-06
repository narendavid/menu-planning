export interface ListasDeCompra {
    id: number;
    nombre: string;
    items: Item[];
}

export interface Item {
    ingrediente_id: number;
    cantidad: number;
}