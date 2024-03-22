import { Knex } from "knex";
require("dotenv").config();

import { faker } from "@faker-js/faker";

const tableName = "users";
export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();
    const users = Array(10).fill(null).map((_, index) => ({
        id: index + 1,
        email: faker.internet.email().toLowerCase(),
        password: faker.internet.password(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        role: index === 0 ? "admin" : "user",
    }));

    // Inserts seed entries
    await knex(tableName).insert(users);
};