export interface EntityParams<Data> {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    data: Data;
}
export default class Entity<Data = {}> implements EntityParams<Data> {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    data: Data;
    constructor(params: EntityParams<Data>, empty: Data);
}
export interface EntityConstructor<Entity = {}, Data = {}> {
    new (params: EntityParams<Data>): Entity;
}