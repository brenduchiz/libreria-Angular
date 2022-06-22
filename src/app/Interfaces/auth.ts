
export interface User {
    id: string;
    email: string;
    lastName: string;
    name: string;
    passwordConfirmed: boolean;
    roleId: number;
    secondLastName: string;
    image: string;
}

export interface Data {
    user: User;
    token: string;
}

export interface Auth {
    data: Data;
    message: string;
}


