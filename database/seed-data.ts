import bcrypt from 'bcryptjs'

interface SeedUser {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'client' 
}

interface SeedData {
    users: SeedUser[]; 
}

export const initialdata: SeedData = {
    users: [
        {   name: 'Jorge Gomez',
            email: 'jorge@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'admin'
        },
        {   name: 'Eduardo Perez',
            email: 'eduardo@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'client'
        },
    ]
}