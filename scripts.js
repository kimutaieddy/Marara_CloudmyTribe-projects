const timeline = document.getElementById('timeline');

// Function to format description as bullet points
function formatDescription(description) {
    // Split the description into individual roles
    const roles = description.split('\n• ');

    // Remove the initial 'Roles:' from the first item
    roles[0] = roles[0].replace('Roles:\n', '');

    // Join roles with <br> for line breaks
    return roles.join('<br>');
}

const timelineData = [
    {
        date: 'Apr 2023 – Aug 2023',
        title: 'IT Systems Analyst',
        description: `Roles:\n• Provided technical assistance to faculty, staff, and students regarding hardware and software issues, troubleshooting problems promptly to minimize downtime.\n• Assisted in the maintenance and management of the school's network infrastructure, including troubleshooting network connectivity issues and ensuring reliable internet access for all users.\n• Supported the school's migration to the cloud by assisting in the setup, configuration, and management of AWS, helping to optimize performance and cost-efficiency.\n• Spearheaded the documentation and delivery of training materials, empowering team members to effectively utilize technology tools and applications.`
    },
    {
        date: 'Jan 2023 – Apr 2023',
        title: 'Information Communication Technology Officer',
        description: `Roles:\n• Managing and maintaining the organization's IT infrastructure, including hardware, software, and network systems.\n• Provided technical support to end-users, troubleshooting network issues, and resolving software-related problems.\n• Contributed to the integration of technology into conservation education initiatives, assisting in the development and deployment of interactive educational tools, multimedia resources, and virtual learning platforms to raise awareness about wildlife conservation among stakeholders and the public.\n• Assisted in implementing cybersecurity measures to protect critical wildlife conservation systems and data from cyber threats, including conducting vulnerability assessments and implementing security protocols.`
    }
];

timelineData.forEach((item, index) => {
    let entry = document.createElement('div');
    entry.classList.add('timeline-entry');
    entry.setAttribute('id', 'entry-' + index);

    let dot = document.createElement('div');
    dot.classList.add('timeline-dot');

    let date = document.createElement('div');
    date.textContent = item.date;
    date.classList.add('timeline-date');

    let content = document.createElement('div');
    content.classList.add('timeline-content');
    content.setAttribute('id', 'content-' + index);

    let title = document.createElement('h3');
    title.textContent = item.title;
    content.appendChild(title); // Append the title inside the content div

    // Create a new element for the description with bullet points
    let description = document.createElement('p');
    description.innerHTML = formatDescription(item.description);
    content.appendChild(description);

    // Append all elements to the entry
    entry.appendChild(dot);
    entry.appendChild(date);
    entry.appendChild(content);

    // Append the entry to the timeline
    timeline.appendChild(entry);
});
