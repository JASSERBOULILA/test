import {int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todo = sqliteTable("todo" , {
    id:int("id").primaryKey(),
    title:text("title"),
    check:integer("check" , {mode:"boolean"})
})