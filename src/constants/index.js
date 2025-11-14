const baseUrl = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "Chat With PDF - RAG System",
    description:
      "A system that lets users upload PDFs and chat with their content using a Retrieval-Augmented Generation (RAG) pipeline. Answers are context-aware and based on the document content.",
    subDescription: [
      "Developed a RAG system using Python, Streamlit, LangChain, and Hugging Face Embeddings.",
      "Implemented FAISS for efficient vector storage and similarity search.",
      "Created an intuitive interface for document upload and interactive chat functionality.",
      "Answers are context-aware and based on the document content.",
    ],
    href: "",
    logo: "",
    image: `${baseUrl}assets/projects/chat-with-pdf.png`,
    tags: [
      {
        id: 1,
        name: "Python",
        path: `${baseUrl}assets/logos/javascript.svg`,
      },
      {
        id: 2,
        name: "LangChain",
        path: `${baseUrl}assets/logos/react.svg`,
      },
      {
        id: 3,
        name: "AI",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 4,
        name: "Streamlit",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 2,
    title: "IoT Plant-Health Monitoring Robot with AI Diagnosis",
    description:
      "An autonomous robot equipped with soil-moisture, temperature, humidity, and light sensors to monitor plant health. Integrated a real-time camera module to detect plant diseases using AI image-classification.",
    subDescription: [
      "Built an autonomous robot with ESP32/Arduino for sensor data collection.",
      "Integrated real-time camera module for plant disease detection using TensorFlow Lite.",
      "Implemented automatic alerts and data visualization through a React web dashboard.",
      "Utilized wireless communication for real-time data transmission.",
    ],
    href: "",
    logo: "",
    image: `${baseUrl}assets/projects/iot-plant-monitoring.png`,
    tags: [
      {
        id: 1,
        name: "ESP32",
        path: `${baseUrl}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "React",
        path: `${baseUrl}assets/logos/react.svg`,
      },
      {
        id: 3,
        name: "TensorFlow",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 4,
        name: "IoT",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 3,
    title: "LoRa Long-Range Communication System",
    description:
      "A communication system using two LoRa modules to send encrypted messages across long distances.",
    subDescription: [
      "Designed a communication system using LoRa SX1278 modules.",
      "Implemented UART/SPI communication protocols for data transmission.",
      "Developed wireless networking capabilities for long-range communication.",
      "Integrated encryption for secure message transmission.",
    ],
    href: "",
    logo: "",
    image: `${baseUrl}assets/projects/lora-communication.png`,
    tags: [
      {
        id: 1,
        name: "LoRa",
        path: `${baseUrl}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "Embedded",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 3,
        name: "Wireless",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 4,
    title: "AI Face Mask Detection and Smart Door Access System",
    description:
      "A facial-recognition system using Raspberry Pi and camera to verify identity and detect whether the user is wearing a mask.",
    subDescription: [
      "Developed facial-recognition system using Raspberry Pi and camera module.",
      "Implemented mask detection using TensorFlow and Python.",
      "Simulated hardware behavior using Proteus before physical deployment.",
      "Implemented GPIO control for door access automation.",
    ],
    href: "",
    logo: "",
    image: `${baseUrl}assets/projects/face-mask-detection.png`,
    tags: [
      {
        id: 1,
        name: "Raspberry Pi",
        path: `${baseUrl}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "Python",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 3,
        name: "TensorFlow",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 4,
        name: "AI",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 5,
    title: "Smart Industrial Monitoring System - STM32 and LabVIEW",
    description:
      "An industrial system for real-time monitoring of temperature, pressure, and motor speed using STM32 microcontroller. Implemented data acquisition and visualization through LabVIEW.",
    subDescription: [
      "Designed industrial monitoring system using STM32 microcontroller.",
      "Implemented real-time data acquisition for temperature, pressure, and motor speed.",
      "Created data visualization and process automation through LabVIEW interface.",
      "Implemented UART communication and sensor calibration for accurate measurements.",
    ],
    href: "",
    logo: "",
    image: `${baseUrl}assets/projects/industrial-monitoring.png`,
    tags: [
      {
        id: 1,
        name: "STM32",
        path: `${baseUrl}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "LabVIEW",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 3,
        name: "Embedded",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 6,
    title: "CTF_ISIMA - Cybersecurity Training Platform",
    description:
      "An interactive Capture The Flag (CTF) platform for students to practice their cybersecurity skills.",
    subDescription: [
      "Developed an interactive CTF platform using HTML, CSS, and JavaScript.",
      "Implemented MySQL database for challenge and user data management.",
      "Integrated Linux-based security tools including Burp Suite and Wireshark.",
      "Created challenges covering various cybersecurity concepts and techniques.",
    ],
    href: "",
    logo: "",
    image: `${baseUrl}assets/projects/ctf-platform.png`,
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: `${baseUrl}assets/logos/javascript.svg`,
      },
      {
        id: 2,
        name: "MySQL",
        path: `${baseUrl}assets/logos/sqlite.svg`,
      },
      {
        id: 3,
        name: "Cybersecurity",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
      {
        id: 4,
        name: "Linux",
        path: `${baseUrl}assets/logos/tailwindcss.svg`,
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/baha-eddine-ammar-5aba14236/",
    icon: `${baseUrl}assets/socials/linkedIn.svg`,
  },
  {
    name: "GitHub",
    href: "https://github.com/baha-eddine-ammar",
    icon: `${baseUrl}assets/logos/github.svg`,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/21650599640",
    icon: `${baseUrl}assets/socials/whatsApp.svg`,
  },
];

export const experiences = [
  {
    title: "Mobile App Development Intern",
    job: "LEA Property Solutions (Startup Project)",
    date: "June 2024",
    contents: [
      "Designed and developed a cross-platform mobile application using Flutter, Firebase, and SQL for property rental management.",
      "Implemented authentication, real-time database synchronization, and RESTful API integration for seamless user experience.",
    ],
  },
  {
    title: "Cloud Infrastructure Intern",
    job: "Naxer.pro (Tunisia-Italy Startup)",
    date: "Aug 2023",
    contents: [
      "Built and deployed cloud and network infrastructure using VMware virtualization and pfSense firewall solutions.",
      "Configured secure virtual environments, optimized server performance, and implemented network routing and monitoring.",
      "Containerized internal services using Docker, improving portability, scalability, and deployment consistency across remote environments.",
    ],
  },
];
export const reviews = [
  {
    name: "Flutter",
    username: "@cross-platform",
    body: "Cross-platform mobile development framework. Built property rental management apps with Firebase integration and real-time synchronization.",
    img: "https://robohash.org/flutter",
  },
  {
    name: "React",
    username: "@frontend",
    body: "Modern JavaScript library for building interactive UIs. Developed web dashboards for IoT monitoring and data visualization.",
    img: "https://robohash.org/react",
  },
  {
    name: "TensorFlow",
    username: "@ai-ml",
    body: "Machine learning framework for AI applications. Implemented plant disease detection, face recognition, and mask detection systems.",
    img: "https://robohash.org/tensorflow",
  },
  {
    name: "LangChain",
    username: "@ai-rag",
    body: "Framework for building RAG applications. Created Chat with PDF system using vector embeddings and context-aware responses.",
    img: "https://robohash.org/langchain",
  },
  {
    name: "ESP32",
    username: "@iot-embedded",
    body: "Low-power microcontroller for IoT projects. Built autonomous plant monitoring robots with sensor integration and wireless communication.",
    img: "https://robohash.org/esp32",
  },
  {
    name: "STM32",
    username: "@industrial",
    body: "ARM-based microcontroller for industrial applications. Designed real-time monitoring systems with LabVIEW integration for process automation.",
    img: "https://robohash.org/stm32",
  },
  {
    name: "Raspberry Pi",
    username: "@edge-computing",
    body: "Single-board computer for embedded projects. Developed facial recognition and smart door access systems with camera integration.",
    img: "https://robohash.org/raspberry",
  },
  {
    name: "Docker",
    username: "@containerization",
    body: "Containerization platform for application deployment. Containerized services for improved portability and scalability in cloud infrastructure.",
    img: "https://robohash.org/docker",
  },
  {
    name: "Python",
    username: "@backend-ai",
    body: "Versatile programming language for AI, web, and automation. Used in RAG systems, IoT projects, and machine learning applications.",
    img: "https://robohash.org/python",
  },
  {
    name: "Firebase",
    username: "@backend-as-a-service",
    body: "Backend platform for mobile and web apps. Integrated real-time database, authentication, and cloud services in Flutter applications.",
    img: "https://robohash.org/firebase",
  },
  {
    name: "LoRa",
    username: "@wireless-iot",
    body: "Long-range wireless communication protocol. Designed encrypted communication systems for long-distance data transmission.",
    img: "https://robohash.org/lora",
  },
  {
    name: "LabVIEW",
    username: "@industrial-automation",
    body: "Graphical programming environment for data acquisition. Created industrial monitoring interfaces with real-time visualization.",
    img: "https://robohash.org/labview",
  },
  {
    name: "Node.js",
    username: "@backend",
    body: "JavaScript runtime for server-side development. Built scalable backend systems and RESTful APIs for web applications.",
    img: "https://robohash.org/nodejs",
  },
  {
    name: "VMware",
    username: "@virtualization",
    body: "Virtualization platform for cloud infrastructure. Deployed and managed virtual environments with network routing and monitoring.",
    img: "https://robohash.org/vmware",
  },
  {
    name: "Arduino",
    username: "@prototyping",
    body: "Open-source electronics platform for rapid prototyping. Used in IoT sensor integration and embedded system development.",
    img: "https://robohash.org/arduino",
  },
];
