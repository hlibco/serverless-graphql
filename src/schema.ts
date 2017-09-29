const schema = `
type Contributor {
  name: String!
  location: String
}
type Task {
  title: String!
  dueDate: String
  owner: Contributor!
  members: [Contributor]
}
#returns list of contributors
type Query {
  getContributors : [Contributor]
  getTasks : [Task]
}`

export { schema }
