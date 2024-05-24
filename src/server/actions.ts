"server-only";

import { db } from "@/db/drizzle";
import {  todo } from "@/db/schema";

export async function createTodo(){

}


export async function showAllTodo(){
    const todoo = await db.select().from(todo);
    return todoo;
}