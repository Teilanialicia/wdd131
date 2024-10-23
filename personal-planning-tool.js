
document.getElementById("planning-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

 
 // Retrieve input values
     const role = document.getElementById("role").value;
     const priority = document.getElementById("priority").value;
     const goal = document.getElementById("goal").value;
     const deadline = document.getElementById("deadline").value;
     const activity = document.getElementById("activity").value;
     const activityTime = document.getElementById("activity-time").value;
     const reflection = document.getElementById("reflection").value;

     // Save each value to localStorage using unique keys
     localStorage.setItem("role", role);
     localStorage.setItem("priority", priority);
     localStorage.setItem("goal", goal);
     localStorage.setItem("deadline", deadline);
     localStorage.setItem("activity", activity);
     localStorage.setItem("activityTime", activityTime);
     localStorage.setItem("reflection", reflection);
     
    // Display the new check-in
    displayCheckin(role, priority, goal, deadline, activity, activityTime, reflection);

     // Optionally, show a success message
     alert("Your plan has been saved!");



            // Display the new check-in
            displayCheckin(role, priority, goal, deadline, activity, activityTime, reflection);

            // Optionally, show a success message
            alert("Your plan has been saved!");
        });

        // Function to display previous check-ins
        function displayCheckin(role, priority, goal, deadline, activity, activityTime, reflection) {
            const checkinList = document.getElementById("checkin-list");

            // Create a new div for the check-in
            const checkinDiv = document.createElement("div");
            checkinDiv.className = "checkin";
            checkinDiv.innerHTML = `
                <strong>Role:</strong> ${role} <br>
                <strong>Priority:</strong> ${priority} <br>
                <strong>Goal:</strong> ${goal} <br>
                <strong>Deadline:</strong> ${deadline} <br>
                <strong>Weekly Activity:</strong> ${activity} <br>
                <strong>Scheduled Time:</strong> ${activityTime} <br>
                <strong>Reflection:</strong> ${reflection}
            `;

            // Append the new check-in to the check-in list
            checkinList.appendChild(checkinDiv);
        }
        
        // Load previous check-ins on page load
        window.onload = function() {
            const storedRole = localStorage.getItem("role");
            const storedPriority = localStorage.getItem("priority");
            const storedGoal = localStorage.getItem("goal");
            const storedDeadline = localStorage.getItem("deadline");
            const storedActivity = localStorage.getItem("activity");
            const storedActivityTime = localStorage.getItem("activityTime");
            const storedReflection = localStorage.getItem("reflection");

            if (storedRole) {
                displayCheckin(storedRole, storedPriority, storedGoal, storedDeadline, storedActivity, storedActivityTime, storedReflection);
            }
        };
