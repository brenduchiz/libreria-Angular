

export interface Users {
    id: string;
    name: string;
    lastName: string;
    secondLastName: string;
    email: string;
    passwordConfirmed: boolean;
    roleId: number;
    image: string;
}

export interface UsersResponse {
    message: string;
    data: Users[];
}

