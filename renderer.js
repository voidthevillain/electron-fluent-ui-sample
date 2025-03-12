// renderer.js
document.addEventListener('DOMContentLoaded', () => {
  // Form elements
  const projectNameField = document.getElementById('projectName');
  const departmentSelect = document.getElementById('department');
  const prioritySelect = document.getElementById('priority');
  const startDateField = document.getElementById('startDate');
  const descriptionArea = document.getElementById('description');
  const teamMembersField = document.getElementById('teamMembers');
  const submitButton = document.getElementById('submitButton');
  const cancelButton = document.getElementById('cancelButton');

  // Submit handler
  submitButton.addEventListener('click', () => {
    // Basic validation
    if (!projectNameField.value || !descriptionArea.value) {
      alert('Please fill in all required fields.');
      return;
    }

    // Collect form data
    const formData = {
      projectName: projectNameField.value,
      department: departmentSelect.value,
      priority: prioritySelect.value,
      startDate: startDateField.value,
      description: descriptionArea.value,
      teamMembers: teamMembersField.value.split(',').map(member => member.trim()),
      timestamp: new Date().toISOString()
    };

    console.log('Form submitted:', formData);
    
    // In a real app, you might save this to a file or send to a server
    // For example, using Node.js fs module:
    // const fs = require('fs');
    // fs.writeFileSync('project-requests.json', JSON.stringify(formData, null, 2));
    
    // Show success message
    alert('Project request submitted successfully!');
    
    // Reset form
    resetForm();
  });

  // Cancel button handler
  cancelButton.addEventListener('click', () => {
    resetForm();
  });

  // Function to reset the form
  function resetForm() {
    projectNameField.value = '';
    departmentSelect.selectedIndex = 0;
    prioritySelect.selectedIndex = 0;
    startDateField.value = '';
    descriptionArea.value = '';
    teamMembersField.value = '';
  }

  // Navigation items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      navItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
    });
  });
});