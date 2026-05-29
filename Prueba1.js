const users = [
  { id: 1, name: 'Ana', role: 'admin', active: true },
  { id: 2, name: 'Carlos', role: 'user', active: false },
  { id: 3, name: 'Maria', role: 'user', active: true },
]

// 1. Filtrar usuarios activos
const activeUsers = users.filter((user) => user.active)
console.log('Activos:', activeUsers)
// [{ id: 1, name: 'Ana', ... }, { id: 3, name: 'Maria', ... }]

// 2. Obtener solo los nombres
const names = users.map((user) => user.name)
console.log('Nombres:', names)
// ['Ana', 'Carlos', 'Maria']

// 3. Encontrar el admin
const admin = users.find((user) => user.role === 'admin')
console.log('Admin:', admin)
// { id: 1, name: 'Ana', role: 'admin', active: true }

// 4. Validar que todos tienen email (agregar campo y validar)
const usersWithEmail = users.map((user) => ({
  ...user,
  email: `${user.name.toLowerCase()}@empresa.com`,
}))
console.log('Con email:', usersWithEmail)

const allHaveEmail = usersWithEmail.every((user) => user.email.includes('@'))
console.log('Todos tienen email:', allHaveEmail) // true