export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const data: User[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 40,
    email: "bob.johnson@example.com",
  },
];
export default data;
