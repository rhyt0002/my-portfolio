document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.close-arrow').style.display = 'block'; 
  });
  
  document.querySelector('.close-arrow').addEventListener('click', function() {
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.close-arrow').style.display = 'none'; 
  });

// script.js portfolio
const projects = [
    {
        title: "Website Devlopment",
        img: "portfolio-images/1.png",
        description: "A project showcasing the development of a professional website with tailored features and design.",
        link: "https://talecraft.ca/"
    },
    {
        title: "Frontend Challange",
        img: "portfolio-images/2.png",
        description: "A challenge-based project demonstrating advanced frontend skills, including responsive and interactive design elements.",
        link: "https://rhyt0002.github.io/-mtm6407-frontend-mentor-rhyt0002/"
    },
    {
        title: "Scramble Word Game",
        img: "portfolio-images/3.png",
        description: "A fun and engaging word scramble game built using JavaScript, showcasing dynamic functionality and user interaction.",
        link: "https://rhyt0002.github.io/mtm6404-scramble/"
    },
    {
        title: "T-shirt store",
        img: "portfolio-images/4.png",
        description: "An e-commerce project featuring a T-shirt store with a focus on product display and user-friendly navigation.",
        link: "https://rhyt0002.github.io/mtm6404-t-shirts/"
    },
    {
        title: "Static website portfolio",
        img: "portfolio-images/5.png",
        description: "A static portfolio website highlighting personal projects and skills in a clean, organized layout.",
        link: "https://rhyt0002.github.io/portfolio/"
    },
    {
        title: "Mobile app wireframe",
        img: "portfolio-images/6.png",
        description: "A detailed wireframe for a mobile app, showcasing UI/UX design skills with a focus on structure and usability.",
        link: "https://www.figma.com/design/9KKB8xxglMgUskgTvJX1WT/Hi-fi?node-id=101-1515&t=yliZJKki2L3s4RpT-1"
    },
    {
        title: "Prototyping",
        img: "portfolio-images/7.png",
        description: "An interactive prototype designed to visualize and test user experiences for a digital application.",
        link: "https://www.figma.com/proto/9KKB8xxglMgUskgTvJX1WT/Hi-fi?node-id=101-1515&node-type=frame&t=ZRkJgBqapfkL4Zbd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=101%3A4397"
    },
    {
        title: "Logo design",
        img: "portfolio-images/8.png",
        description: "A creative logo design project emphasizing brand identity and visual appeal.",
        link: "portfolio-images/8.png"
    },
    {
        title: "Static Website",
        img: "portfolio-images/9.png",
        description: "A static website created as part of a midterm assignment, focusing on basic web design principles.",
        link: "https://rhyt0002.github.io/mtm6201-midterm/about.html"
    },
    {
        title: "API Use",
        img: "portfolio-images/10.png",
        description: " A project utilizing APIs to fetch and display dynamic data, demonstrating integration and functionality.",
        link: "https://rhyt0002.github.io/mtm6302-capstone-rhyt0002/"
    },
    {
        title: "Directory",
        img: "portfolio-images/11.png",
        description: "A directory project showcasing the use of JavaScript to manage and display data efficiently.",
        link: "https://rhyt0002.github.io/mtm6404-directory/"
    },
    
];
document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.querySelector(".portfolio-grid");

    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("portfolio-item");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.img}" alt="${project.title}">
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        portfolioGrid.appendChild(projectCard);
    });
});



