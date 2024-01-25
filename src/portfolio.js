import aboutpic from "./components/Access/pic.png"

const header = {
    homepage: 'https://ajaipaul-cheema.github.io/portfolio/',
    title: 'Ajaipaul Cheema',
}

const about = {
    photo: aboutpic,
    name: 'Ajaipaul',
    role: 'CS @ SFU | Prev Software Engineer Intern @ Felix Payment Systems',
    description: 
        '👨‍💻 A highly enthusiastic 4th year computer science student at SFU, who loves to bring his ideas to life through code.\n 👋 Whether it is about software development, hockey, or the gym, feel free to reach out and connect with me!\n 🔭 Seeking for Summer 2024 SWE internships',
    contact: {
        github: 'https://github.com/Ajaipaul-Cheema',
        linkedin: 'https://www.linkedin.com/in/ajaipaul-cheema/',
        email: 'aca242@sfu.ca'
    }
}

const experiences = [
    {
        company: 'Felix Payment Systems',
        companyLink: 'https://www.payfelix.com/',
        role: 'Software Engineer Intern',
        date: 'May 2022 - August 2022',
        description: String().concat(
            'Contributed to a tap-to-phone payment solution, reducing processing time by 45% for NFC contactless payments\n',
            'Created REST APIs using Spring Boot to interface with Visa and Mastercard Contactless Reader SDKs\n',
            'Built an internal dashboard application with Java and React to display feasibility results for payment transactions\n',
            'Aided in Android app development and server-side engines in Linux environments with the use of Docker containers\n',
            'Implemented widget transaction responses in C++ and performed pre-certification EMV testing using UL Test tool\n',
            'Conducted 200+ unit tests with JUnit and integrated test sets into Bamboo CI/CD through bash scripts'
        ),
        stack: ['Java', 'React', 'C++', 'Spring Boot', 'Docker', 'JUnit']
    },
]

const projects = [  
    {
        name: 'Inventory Scanner Web App',
        description: String().concat(
            'Designed and implemented a full-stack inventory system, leveraging barcode data for scanning functionality, resulting in countless hours saved per week and a reduction in manual labor\n',
            'Built a REST API for CRUD operations, leveraging Express, Node, and PostgreSQL\n',
            'Integrated Google Maps API to show location of inventory items, leading to less inventory tracking errors\n',
            'Created a secure authentication system using JWT Auth, BCrypt and PassportJS to prevent unauthorized access'
        ),
        stack: ['JavaScript', 'Node', 'Express', 'React', 'PostgreSQL', 'Git'],
        github: 'https://github.com/Ajaipaul-Cheema/BGC-Engineering-Inventory-System',
    },
    {
        name: 'DailyDime Mobile App',
        description: String().concat(
            'Developed a mobile app for personal finance that allows users to track their transactions, visualize spending patterns, and create investment portfolios\n',
            'Utilized AnyChart Android to create pie and bar charts to represent income and expense distributions, providing users with insightful visualizations to understand their financial trends\n',
            'Used Firebase for secure user authentication and as a data storage solution for user-specific financial data\n',
            'Implemented Kotlin MVVM architecture for a modular codebase, enabling seamless integration of new features',
        ),
        stack: ['Java', 'Kotlin', 'Firebase', 'GCP', 'Git'],
        github: 'https://github.com/Ajaipaul-Cheema/DailyDime',
    },
    {
        name: 'Fantasy Hockey Team Optimizer',
        description: String().concat(
            'Developed a Python script using web scraping to collect player statistics from various online sources\n',
            'Utilized the Yahoo Fantasy Sports API endpoints to access current performance statistics and historical data\n',
            'Applied linear regression models to assess player performance trends, contributing to an increase in team point averages over the season'
        ),
        stack: ['Python'],
    },
    {
        name: 'Menu Order Desktop App',
        description: String().concat(
            'Built a Java CRUD app using Swing API and Spring Boot to emulate a food ordering application\n',
            'Developed the GUI to feature menu items per page by leveraging scrolling functionality\n',
            'Employed factory design patterns to dynamically create instances of menu item objects based on user selections'
        ),
        stack: ['Java', 'Spring Boot', 'Swing', 'JUnit'],
        github: 'https://github.com/Ajaipaul-Cheema/TrackerPedia-App'
    },
    {
        name: 'Image Processor',
        description: String().concat(
            'Implemented an image editor with many filters as a desktop application with Python back-end and PyGame GUI\n',
            'Increased user engagement through image manipulation using RGB techniques to create various effects\n',
            'Enhanced efficiency of image manipulation with the use of dictionaries to store pixel information'
        ),
        photo: null,
        stack: ['Python', 'PyGame'],
        github: 'https://github.com/Ajaipaul-Cheema/Image-Processor',
    },
  
]

export { header, about, experiences, projects }
