import { Args, Query, Resolver, Int, Mutation } from "@nestjs/graphql";
import { Book } from './book.schema';
import {Book as BookModel} from "../graphql"
import { BookService } from "./book.service";
import { AddBookArgs } from "./add.book.args";
@Resolver(of => Book)
export class BookResolver {

  constructor(private readonly bookService: BookService) {

  }

  // Queries and mutations

  @Query(returns => [Book], {name: 'books'})
  getAllBooks(): BookModel[] {
    return this.bookService.findAllBooks();
  }

  @Query(returns => Book, {name: 'findBookById', nullable: true})
  getBookById(@Args({name: "bookId",type: () => Int}) id: number): BookModel {
    return this.bookService.findBookById(id);
  }

  @Mutation(returns => String, {name: "deleteBook"})
  deleteBookById(@Args({name: 'bookId', type: () => Int }) id: number): string {
    return this.bookService.deleteBook(id);
  }

  @Mutation(returns => String, { name: "addBook" })
  addBook(@Args("addBookArgs") addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation(returns => String, { name: "updateBook" })
  updateBook(@Args({name: 'bookId', type: () => Int }) id: number, @Args("addBookArgs") updateBookArgs: AddBookArgs) {
    return this.bookService.updateBook(id, updateBookArgs);
  }
  // @Query((returns) => [Book], {
  //   name: 'books'
  // })
  // getAllBooks() {
  //   // return books
  //   const arr: BookModel[] = [
  //     {
  //       id: 1,
  //       title: 'Nha Gia Kim',
  //       price: 500,
  //     },
  //     {
  //       id: 2,
  //       title: 'Cafe Cung Tony',
  //       price: 600,
  //     },
  //     {
  //       id: 3,
  //       title: 'Mat Biec',
  //       price: 900,
  //     },
  //   ];
  //   return arr;
  // }
}
