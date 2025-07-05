

const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstname": "Aarav",
        "tasks": [
            {
                "title": "Submit report",
                "description": "Prepare and submit the monthly sales report.",
                "date": "2025-01-27",
                "category": "Sales",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team meeting",
                "description": "Attend the weekly team meeting.",
                "date": "2025-01-28",
                "category": "General",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Review documents",
                "description": "Review and approve the legal documents.",
                "date": "2025-01-30",
                "category": "Legal",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Diya",
        "tasks": [
            {
                "title": "Update inventory",
                "description": "Verify and update the inventory list.",
                "date": "2025-01-27",
                "category": "Inventory",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Customer feedback",
                "description": "Analyze customer feedback and prepare insights.",
                "date": "2025-01-29",
                "category": "Customer Service",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Ishaan",
        "tasks": [
            {
                "title": "System backup",
                "description": "Perform a complete system backup.",
                "date": "2025-01-28",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare training",
                "description": "Prepare materials for new employee training.",
                "date": "2025-02-01",
                "category": "HR",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Budget review",
                "description": "Review department budget allocation.",
                "date": "2025-01-31",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 2, "completed": 1, "failed": 1 }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Ananya",
        "tasks": [
            {
                "title": "Vendor meeting",
                "description": "Meet with vendors to discuss contracts.",
                "date": "2025-01-29",
                "category": "Procurement",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Product testing",
                "description": "Test the new product batch.",
                "date": "2025-01-30",
                "category": "Quality Control",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Policy update",
                "description": "Update company policy handbook.",
                "date": "2025-02-03",
                "category": "Admin",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Kabir",
        "tasks": [
            {
                "title": "Social media post",
                "description": "Create and schedule social media posts.",
                "date": "2025-01-28",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Employee survey",
                "description": "Prepare and circulate the employee satisfaction survey.",
                "date": "2025-01-31",
                "category": "HR",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Website update",
                "description": "Update website with new product details.",
                "date": "2025-02-02",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": { "active": 2, "newTask": 2, "completed": 1, "failed": 0 }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export  const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}



export  const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}
