const projects = [
    {
        id: 1, 
        title: "React Portfolio Website",
        cardDescription: "Personal Portfolio Website",
        detailsDescription: "A responsive portfolio website built to showcase personal projects, technical skills, and professional experience. It features dynamic project cards and detailed project pages, allowing potential employers or collaborators to explore project details interactively.",
        tech: "React, JavaScript, HTML, CSS, React Router, Gen AI",
        date: "August 2025 - Present",
        keyFeatures: [
            "Component-based architecture using React.js for modularity and reusability.",
            "Multi-page navigation with React Router.",
            "Dynamic project cards linking to individual project detail pages."

        ],
        summary: "Responsive website that displays personal projects, technical skills, and professional experience.",
        outcome: "Delivered a professional, interactive portfolio that showcases technical skills and projects, enhancing personal branding and providing a polished platform for potential employers to evaluate capabilities.",
        repoLink: "https://github.com/anhphan17/software-development-portfolio"
    },
    {
        id: 2,
        title: "Local Explorer App",
        cardDescription: "Team Project (iOS)",
        detailsDescription: "A mobile iOS application that allows users to explore and document local destinations. Users can capture photos, tag them with precise GPS coordinates, and create a personal interactive map of visited locations. This app serves as a travel journal, helping users visually track their adventures with offline storage capabilities.",
        tech: "Swift, UIKit, MapKit, CoreLocation, CoreData, Xcode",
        date: "April 2025 - May 2025",
        keyFeatures: [
            "Capture and store geotagged photos of local destinations.",
            "Interactive MapKit integration with pin markers for visited locations.",
            "Offline storage and retrieval of all captured data using CoreData.",
            "Tab-based navigation and an interactive gallery for seamless user experience."
        ],
        summary: "iOS app that lets users discover, document and map local destinations with geotagged photos.",
        outcome: "Enabled users to visually document their journeys and revisit explored places offline, increasing engagement and usability for local explorers and travelers.",
        repoLink: "https://github.com/anhphan17/LocalExplorerApp"
    },
    {
        id: 3,
        title: "Inventory Management Data Analysis",
        cardDescription: "Team Project (Database Management)",
        detailsDescription: "This project focuses on analyzing and managing inventory data to optimize stock levels and improve decision-making for businesses. It provides a comprehensive system for tracking inventory movements, detecting anomalies, and predicting future stock requirements, helping companies reduce overstocking and stockouts. The system integrates SQL databases and Python scripts to clean, analyze, and visualize inventory data.",
        tech: "SQLite, Python, Data Validation, Authentication",
        date: "April 2025 - May 2025",
        keyFeatures: [
            "Tracks inventory across multiple locations to detect anomalies and prevent understocking/overstocking.",
            "Provides employee-level activity monitoring for accountability and audit purposes.",
            "Generates data-driven insights for identifying shipment misrouting and mismatched records.",
            "Supports SQL and Python-based data queries for pattern detection and validation."
        ],
        summary: "System that tracks and analyzes inventory movements to optimize stock and prevent discrepancies.",
        outcome: "Reduced inventory erros, improved operational efficiency, and enhaced data governance across multiple warehouse locations, supporting better business decision-making.",
        presLink: "https://www.canva.com/design/DAGWT8rrPC0/x1gWUZ96fRo1dVLtTsWVpA/view?utm_content=DAGWT8rrPC0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha23239d4ff"
        
    
    },
    {
        id: 4,
        title: "Memo List App",
        cardDescription: "Team Project (Android)",
        detailsDescription: "An Android mobile application for task management and note-taking, designed to help users organize their daily activities with priority sorting and filtering. The app allows for persistent storage of memos using SQLite and provides and intuitive interface for quick memo creation and navigation.",
        tech: "Java, Android Studio, XML, SQLiteOpenHelper, SharedPreferences",
        date: "March 2025",
        keyFeatures: [
            "Create, read, update, and delete memos.",
            "Filter and sort memos based on priority levels.",
            "Local offline data persistence using SQLite.",
            "Intuitive UI for easy nvaigation and task management.",
            "Gesture-based interactions for deleting or managing memos."
        ],
        summary: "Android app that organizes, prioritizes, and manages daily tasks and notes.",
        outcome: "Helped users organize daily tasks more efficiently, improving productivity and task tracking for mobile users.",
        repoLink: "https://github.com/anhphan17/MemoList"
    },
    {
        id: 5, 
        title: "Contact List App",
        cardDescription: "Solo Project (Android)",
        detailsDescription: "A native Android application for maintaining personal or professional contact information. The app allows users to add, edit, delete, and sort contacts efficiently, while securely storing data locally on the device.",
        tech: "Java, Android Studio, RecyclerView, SQLiteOpenHelper, SharedPreferences, Google Maps API",
        date: "January 2025 - March 2025",
        keyFeatures: [
            "Full CRUD functionality for managing contacts.",
            "Responsive UI optimized for ease of use and navigation.",
            "Secure local storage of contact data using SQLite.",
            "Integration with phone dialer for direct calling.",
            "Camera Integration: Users can take a save photos for each contact using the phone camera."
        ],
        summary: "Android app that stores, manages, and searches personal and professional contacts efficiently.",
        outcome: "Simplified personal and professional contact management, allowing users to store, access, and interact with contacts efficiently in an offline environment.",
        repoLink: "https://github.com/anhphan17/CIS4280ContactListProject"
    },
    {
        id: 6, 
        title: "Airline Reservation System",
        cardDescription: "Team Project (Java)",
        detailsDescription: "A Java application simulating a real-world airline booking system, including flight search, booking, cancellations, and administrative features. The system connects a GUI built in JavaFX with a relational database through JDBC, providing a fully functional end-to-end airline reservation experience.",
        tech: "Java, JavaFX, JDBC, Azure SQL, GUI",
        date: "November 2024 - December 2024",
        keyFeatures: [
            "Secure user authentication with login and registration.",
            "Search, book, and cancel flights with conflict management.",
            "Admin dashboard to manage flight schedules and view reservations.",
            "JavaFX GUI for an interactive and user-friendly interface.",
            "Database integration using JDBC to store users, flights, and bookings."
    
        ],
        summary: "Java platform that enables searching, booking, and managing airline flights with an admin panel.",
        outcome: "Delivered a scalable, database-driven system that mirrors real-world airline systems, improving understanding of full-stack development and complex data management.",
        repoLink: "https://github.com/anhphan17/CIS3270FlightProject"
    },
    
];

export default projects;