
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface AddTaskArgs {
    title: string;
    description: string;
}

export interface UpdateTaskArgs {
    id: number;
    title: string;
    description: string;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface Task {
    id: number;
    title: string;
    description: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    findBookById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
    tasks(): Task[] | Promise<Task[]>;
    taskById(taskId: number): Task | Promise<Task>;
}

export interface IMutation {
    deleteBook(bookId: number): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(bookId: number, updateBookArgs: AddBookArgs): string | Promise<string>;
    deleteTask(taskId: number): string | Promise<string>;
    addTask(addTaskArgs: AddTaskArgs): string | Promise<string>;
    updateTask(updateTaskArgs: UpdateTaskArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
