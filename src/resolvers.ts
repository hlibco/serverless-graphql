const tasks = [
  {
    title: 'Build front-end',
    owner: {
      name: 'Austen'
    },
    // dueDate: new Date()
  },
  {
    title: 'Build back-end',
    owner: {
      name: 'Nik Graf'
    },
    // dueDate: new Date(),
    members: [
      {
        name: 'Siddharth Gupta'
      },
      {
        name: 'Philipp Muens'
      }
    ]
  }
]

const contributors = [
  {
    name: 'Austen',
    location: 'San Francisco',
  },
  {
    name: 'Philipp Muens',
    location: 'San Francisco',
  },
  {
    name: 'Nik Graf',
    location: 'San Francisco',
  },
  {
    name: 'Siddharth Gupta',
    location: 'San Francisco',
  }
]

export const resolvers = {
  Query: {
    getContributors: () => contributors,
    getTasks: () => tasks
  }
}
