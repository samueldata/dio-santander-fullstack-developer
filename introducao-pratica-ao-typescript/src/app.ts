let employee = {
    code: 10,
    name: 'Jhon'
};

let employee2: { code: number, name: string } = {
    code: 11,
    name: 'James'
}

interface Employee {
    code: number,
    name: string
}

let employee3: Employee = {
    code: 200,
    name: 'Alex'
}
// employee.code = 10;
// employee.name = "John";