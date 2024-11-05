let employees = [];
let nextId = 1;

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    
    const messageDiv = document.getElementById('message');

    if (!name || !profession || !age) {
        messageDiv.textContent = "All fields are required.";
        messageDiv.className = "message error";
        return; 
    }

    const newEmployee = {
        id: nextId++,
        name,
        profession,
        age
    };
    employees.push(newEmployee);
    document.getElementById('employeeForm').reset();
    messageDiv.textContent = "Employee added successfully!";
    messageDiv.className = "message success";
    // Update employee list
    displayEmployees();
});

function displayEmployees() {
    const employeeListDiv = document.getElementById('employeeList');
    employeeListDiv.innerHTML = '';
    employees.forEach(employee => {
        const employeeItem = document.createElement('div');
        employeeItem.className = 'employee-item';
        
        employeeItem.innerHTML = `
            ${employee.name} - ${employee.profession} - ${employee.age}
            <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        
        employeeListDiv.appendChild(employeeItem);
    });
}

function deleteEmployee(id) {
   employees = employees.filter(employee => employee.id !== id);
   displayEmployees();
}