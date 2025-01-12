import aboutpic from "./components/Access/pic.png"

const header = {
    homepage: 'https://Ajaipaul-Cheema.github.io/portfolio/',
    title: 'Ajaipaul Cheema',
}

const about = {
    photo: aboutpic,
    name: 'Ajaipaul',
    role: 'CS @ SFU | Software Engineer Intern @ Clio',
    description: 
        '👨‍💻 A 4th year computer science student at SFU.\n 👋 Whether it is about software development, hockey, or the gym, feel free to reach out and connect with me!\n 🔭 Seeking for Summer 2025 SWE internships',
    contact: {
        github: 'https://github.com/Ajaipaul-Cheema',
        linkedin: 'https://www.linkedin.com/in/ajaipaul-cheema/',
        email: 'aca242@sfu.ca'
    }
}

const experiences = [
    {
        company: 'Clio - Cloud-Based Legal Technology',
        companyLink: 'https://www.clio.com/features/payments/',
        role: 'Software Engineer Intern',
        date: 'September 2024 - April 2025',
    },
    {
        company: 'Felix Payment Systems',
        companyLink: 'https://www.payfelix.com/',
        role: 'Software Engineer Intern',
        date: 'May 2022 - August 2022',
    },
]

const projects = [  
    {
        name: 'Inventory Scanner Web App',
        description: String().concat(
            'Designed and implemented a full-stack inventory system, leveraging barcode data for scanning functionality, resulting in countless hours saved per week and a reduction in manual labor\n',
            'Built a REST API for CRUD operations, leveraging Express, Node, and PostgreSQL\n',
            'Integrated Google Maps API to show location of inventory items, leading to fewer inventory tracking errors\n',
            'Created a secure authentication system using JWT Auth, BCrypt and PassportJS to prevent unauthorized access'
        ),
        stack: ['JavaScript', 'Node', 'Express', 'React', 'PostgreSQL', 'Git'],
        github: 'https://github.com/Ajaipaul-Cheema/BGC-Engineering-Inventory-System',
    },
    {
        name: 'Olympic Medals Predictor',
        description: String().concat(
            'Developed and evaluated multiple predictive models for the 2016 Olympics using Python and scikit-learn, achieving an RMSE of 5.82 medals\n',
            'Scraped Olympic statistics across seven years of olympic data using BeautifulSoup and requests library, resulting in over 1,300 rows of country, medals, and athlete data\n',
            'Performed data cleaning and entity resolution using Pandas, transforming and merging data into a unified DataFrame for model training and testing\n',
            'Visualized model performance by plotting and comparing predictions using Matplotlib, analyzing outliers and trends to improve accuracy'
        ),
        stack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib', 'requests', 'BeautifulSoup'],
        github: 'https://github.com/Ajaipaul-Cheema/Olympics_Predictor',
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
        name: 'Computational Blockchain',
        description: String().concat(
            'Developed a work-based blockchain application in Rust with the SHA256 hashing algorithm\n',
            'Implemented a producer-consumer work queue that concurrently mines blocks by distributing the workload among multiple worker threads\n',
            'Retrieves the first eligible proof value before draining the multi-threaded work queue, ensuring resource optimization'
        ),
        stack: ['Rust'],
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
        name: 'NHL Stats Analyzer',
        description: String().concat(
            'Developed a Python script using web scraping to collect player statistics from various online sources\n',
            'Utilized the Yahoo Fantasy Sports API endpoints to access current performance statistics and historical data\n',
            'Applied linear regression models to assess player performance trends, contributing to an increase in team point averages over the season'
        ),
        stack: ['Python'],
    },
    {
        name: 'CShell',
        description: String().concat(
            'Architected and created a command-line interpreter with robust environment variable support\n',
            'Developed dynamic storage for management of environment variables and implemented multi-threaded capabilities\n',
            'Integrated a custom system call into the Linux kernel for converting lowercase ASCII characters to uppercase'
        ),
        stack: ['C', 'Linux'],
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
