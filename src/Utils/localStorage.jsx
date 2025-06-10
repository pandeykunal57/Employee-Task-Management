const employees=[
{
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks:  [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare project proposal",
        description: "Create an initial project proposal document.",
        date: "2025-06-11",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit timesheet",
        description: "Log work hours for the previous week.",
        date: "2025-06-05",
        category: "Administrative"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client meeting follow-up",
        description: "Send summary email to client after meeting.",
        date: "2025-06-08",
        category: "Communication"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research competitor analysis",
        description: "Analyze top 3 competitors’ new features.",
        date: "2025-06-10",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Weekly standup",
        description: "Participate in the team's weekly status meeting.",
        date: "2025-06-03",
        category: "Meetings"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "UI Design revision",
        description: "Update mockups based on feedback.",
        date: "2025-06-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Code review",
        description: "Review PR from frontend team.",
        date: "2025-06-06",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve the login issue reported by QA.",
        date: "2025-06-10",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy to staging",
        description: "Push latest build to the staging server.",
        date: "2025-06-07",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Unit test coverage",
        description: "Increase unit test coverage to 90%.",
        date: "2025-06-09",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Feature planning session",
        description: "Discuss upcoming features with product team.",
        date: "2025-06-11",
        category: "Planning"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer feedback survey",
        description: "Draft survey for feedback on new features.",
        date: "2025-06-13",
        category: "Feedback"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test API endpoints",
        description: "Manually test all API endpoints for errors.",
        date: "2025-06-10",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update documentation",
        description: "Add recent changes to the API documentation.",
        date: "2025-06-06",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Security audit",
        description: "Review current security policies.",
        date: "2025-06-04",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Run performance tests",
        description: "Benchmark load time on latest build.",
        date: "2025-06-10",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Onboard new intern",
        description: "Guide the new intern through setup process.",
        date: "2025-06-08",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix mobile layout",
        description: "Resolve UI issues on small screen devices.",
        date: "2025-06-07",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare demo video",
        description: "Record feature walkthrough for demo day.",
        date: "2025-06-12",
        category: "Presentation"
      }
    ]
  }
]

const Admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocaStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('Admin',JSON.stringify(Admin))
}

export const getLocaStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const Admin=JSON.parse(localStorage.getItem('Admin'))
}