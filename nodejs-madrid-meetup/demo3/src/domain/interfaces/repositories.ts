import { Actor } from "../model/actor";
import { Director } from "../model/director";
import { Movie } from "../model/movie";
import { Purchase } from "../model/purchase";
import { Account } from "../model/account";
import { Repository } from "../interfaces/repositories";

export type Query<T> = {
    [P in keyof T]?: T[P] | RegExp;
};

export interface Repository<T> {
    save(doc: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
    findManyById(ids: string[]): Promise<T[]>;
    findManyByQuery(andQueries?: Query<T>, orQueries?: Query<T>): Promise<T[]>;
}

export type MovieRepository = Repository<Movie>;
export type ActorRepository = Repository<Actor>;
export type DirectorRepository = Repository<Director>;
export type AccountRepository = Repository<Account>;
export type PurchaseRepository = Repository<Purchase>;
