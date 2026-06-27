const QUESTION_DB = [
    // General Knowledge
    { id: 1, category: "General Knowledge", difficulty: "Easy", question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"], answer: "Paris",
        explanation: "Paris is the capital of France, known as the City of Light." },
    { id: 2, category: "General Knowledge", difficulty: "Easy", question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars",
        explanation: "Mars has a reddish appearance due to iron oxide." },
    { id: 3, category: "General Knowledge", difficulty: "Easy", question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific",
        explanation: "The Pacific Ocean is the largest and deepest." },
    { id: 4, category: "General Knowledge", difficulty: "Medium", question: "Who wrote 'Romeo and Juliet'?",
        options: ["Dickens", "Shakespeare", "Austen", "Twain"], answer: "Shakespeare",
        explanation: "Shakespeare wrote Romeo and Juliet around 1597." },
    { id: 5, category: "General Knowledge", difficulty: "Medium", question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"], answer: "Au",
        explanation: "Au comes from the Latin 'aurum' meaning gold." },
    { id: 6, category: "General Knowledge", difficulty: "Hard", question: "Which country has the most natural lakes?",
        options: ["USA", "Canada", "Russia", "Brazil"], answer: "Canada",
        explanation: "Canada has over 60% of the world's natural lakes." },

    // Science
    { id: 7, category: "Science", difficulty: "Easy", question: "What is H2O?",
        options: ["Hydrogen", "Water", "Oxygen", "Salt"], answer: "Water",
        explanation: "H2O is the chemical formula for water." },
    { id: 8, category: "Science", difficulty: "Easy", question: "What is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond",
        explanation: "Diamond is the hardest known natural material." },
    { id: 9, category: "Science", difficulty: "Medium", question: "What is the speed of light approximately?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], answer: "300,000 km/s",
        explanation: "Light travels at about 299,792 km/s in vacuum." },
    { id: 10, category: "Science", difficulty: "Medium", question: "Which element is necessary for combustion?",
        options: ["Nitrogen", "Oxygen", "Carbon", "Hydrogen"], answer: "Oxygen",
        explanation: "Oxygen supports combustion and is required for fire." },
    { id: 11, category: "Science", difficulty: "Hard", question: "What is the study of fossils called?",
        options: ["Biology", "Paleontology", "Archaeology", "Geology"], answer: "Paleontology",
        explanation: "Paleontology is the study of ancient life through fossils." },

    // Technology
    { id: 12, category: "Technology", difficulty: "Easy", question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Core Process Unit", "Control Panel Unit"],
        answer: "Central Processing Unit", explanation: "CPU is the brain of the computer." },
    { id: 13, category: "Technology", difficulty: "Easy", question: "Which company developed Windows OS?",
        options: ["Apple", "Google", "Microsoft", "IBM"], answer: "Microsoft",
        explanation: "Microsoft developed the Windows operating system." },
    { id: 14, category: "Technology", difficulty: "Medium", question: "What is the smallest unit of digital data?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"], answer: "Bit",
        explanation: "A bit is the smallest unit of data, 0 or 1." },
    { id: 15, category: "Technology", difficulty: "Medium", question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ], answer: "Hyper Text Markup Language",
        explanation: "HTML is the standard language for creating web pages." },
    { id: 16, category: "Technology", difficulty: "Hard", question: "Who was the first computer programmer?",
        options: ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Charles Babbage"], answer: "Ada Lovelace",
        explanation: "Ada Lovelace is considered the first computer programmer." },

    // Mathematics
    { id: 17, category: "Mathematics", difficulty: "Easy", question: "What is 7 × 8?",
        options: ["54", "56", "58", "62"], answer: "56", explanation: "7 × 8 = 56." },
    { id: 18, category: "Mathematics", difficulty: "Easy", question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"], answer: "9", explanation: "9 × 9 = 81." },
    { id: 19, category: "Mathematics", difficulty: "Medium", question: "What is π to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14",
        explanation: "Pi is approximately 3.14159, rounded to 3.14." },
    { id: 20, category: "Mathematics", difficulty: "Medium", question: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"], answer: "180°",
        explanation: "Interior angles of a triangle sum to 180°." },
    { id: 21, category: "Mathematics", difficulty: "Hard", question: "What is the 8th Fibonacci number (0,1)?",
        options: ["13", "21", "8", "5"], answer: "21",
        explanation: "0,1,1,2,3,5,8,13,21 — the 8th is 21." },

    // Sports
    { id: 22, category: "Sports", difficulty: "Easy", question: "Which sport is 'the beautiful game'?",
        options: ["Basketball", "Football", "Tennis", "Cricket"], answer: "Football",
        explanation: "Football (soccer) is called 'the beautiful game'." },
    { id: 23, category: "Sports", difficulty: "Easy", question: "How many players in a cricket team?",
        options: ["9", "10", "11", "12"], answer: "11", explanation: "A cricket team has 11 players." },
    { id: 24, category: "Sports", difficulty: "Medium", question: "Which country has won the most FIFA World Cups?",
        options: ["Brazil", "Germany", "Italy", "Argentina"], answer: "Brazil",
        explanation: "Brazil has won 5 FIFA World Cups." },
    { id: 25, category: "Sports", difficulty: "Medium", question: "What is the longest-running annual sporting event?",
        options: ["The Olympics", "Wimbledon", "The Kentucky Derby", "The Tour de France"], answer: "Wimbledon",
        explanation: "Wimbledon has been held annually since 1877." },
    { id: 26, category: "Sports", difficulty: "Hard", question: "What is the weight of a standard golf ball?",
        options: ["42.67g", "45.93g", "48.77g", "50.23g"], answer: "45.93g",
        explanation: "A standard golf ball weighs 45.93 grams." },

    // History
    { id: 27, category: "History", difficulty: "Easy", question: "Who was the first US President?",
        options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
        answer: "George Washington", explanation: "George Washington served from 1789–1797." },
    { id: 28, category: "History", difficulty: "Easy", question: "What year did WWII end?",
        options: ["1944", "1945", "1946", "1947"], answer: "1945",
        explanation: "World War II ended in 1945." },
    { id: 29, category: "History", difficulty: "Medium", question: "Which empire built the Colosseum?",
        options: ["Greek", "Roman", "Egyptian", "Persian"], answer: "Roman",
        explanation: "The Colosseum was built by the Roman Empire." },
    { id: 30, category: "History", difficulty: "Medium", question: "Who was the first woman to fly solo across the Atlantic?",
        options: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
        answer: "Amelia Earhart", explanation: "Amelia Earhart completed the flight in 1932." },
    { id: 31, category: "History", difficulty: "Hard", question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1988", "1989", "1990"], answer: "1989",
        explanation: "The Berlin Wall fell on November 9, 1989." },

    // Geography
    { id: 32, category: "Geography", difficulty: "Easy", question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile",
        explanation: "The Nile River is about 6,650 km long." },
    { id: 33, category: "Geography", difficulty: "Easy", question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"], answer: "Vatican City",
        explanation: "Vatican City is 0.44 km²." },
    { id: 34, category: "Geography", difficulty: "Medium", question: "Which is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara",
        explanation: "The Sahara is the largest hot desert, ~9.2 million km²." },
    { id: 35, category: "Geography", difficulty: "Medium", question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra",
        explanation: "Canberra is the capital city of Australia." },
    { id: 36, category: "Geography", difficulty: "Hard", question: "Which country has the most time zones?",
        options: ["Russia", "USA", "China", "France"], answer: "France",
        explanation: "France has 12 time zones including overseas territories." },

    // Computer Science
    { id: 37, category: "Computer Science", difficulty: "Easy", question: "What is the base of the binary system?",
        options: ["2", "8", "10", "16"], answer: "2", explanation: "Binary uses base 2." },
    { id: 38, category: "Computer Science", difficulty: "Easy", question: "What is an algorithm?",
        options: ["A type of computer", "A step-by-step procedure", "A programming language", "A data structure"],
        answer: "A step-by-step procedure", explanation: "An algorithm is a set of steps to solve a problem." },
    { id: 39, category: "Computer Science", difficulty: "Medium", question: "What does HTTP stand for?",
        options: ["Hyper Text Transfer Protocol", "High Tech Transfer Protocol", "Hyper Transfer Text Protocol",
            "High Text Transfer Protocol"
        ], answer: "Hyper Text Transfer Protocol",
        explanation: "HTTP is the protocol for transferring web pages." },
    { id: 40, category: "Computer Science", difficulty: "Medium", question: "Which sorting algorithm is fastest in practice?",
        options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"], answer: "Quick Sort",
        explanation: "Quick Sort is often fastest due to cache efficiency." },
    { id: 41, category: "Computer Science", difficulty: "Hard", question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: "O(log n)",
        explanation: "Binary search has O(log n) time complexity." },

    // Current Affairs
    { id: 42, category: "Current Affairs", difficulty: "Easy", question: "Which country is the most populous as of 2025?",
        options: ["China", "India", "USA", "Indonesia"], answer: "India",
        explanation: "India became the most populous in 2023." },
    { id: 43, category: "Current Affairs", difficulty: "Easy", question: "What is the name of the first AI chatbot?",
        options: ["ChatGPT", "ELIZA", "Siri", "Alexa"], answer: "ELIZA",
        explanation: "ELIZA was developed in the 1960s." },
    { id: 44, category: "Current Affairs", difficulty: "Medium",
        question: "Which company launched the first private spacecraft to ISS?",
        options: ["SpaceX", "Blue Origin", "Virgin Galactic", "Boeing"], answer: "SpaceX",
        explanation: "SpaceX's Dragon docked with ISS in 2012." },
    { id: 45, category: "Current Affairs", difficulty: "Medium", question: "What is the world's largest democracy?",
        options: ["USA", "India", "Indonesia", "Brazil"], answer: "India",
        explanation: "India is the world's largest democracy by population." },
    { id: 46, category: "Current Affairs", difficulty: "Hard", question: "Which country hosted the 2024 Summer Olympics?",
        options: ["Japan", "France", "USA", "UK"], answer: "France",
        explanation: "Paris, France hosted the 2024 Summer Olympics." },

    // English Grammar
    { id: 47, category: "English Grammar", difficulty: "Easy", question: "What is the past tense of 'go'?",
        options: ["Goed", "Gone", "Went", "Going"], answer: "Went", explanation: "'Went' is the past tense of 'go'." },
    { id: 48, category: "English Grammar", difficulty: "Easy", question: "Which is a pronoun?",
        options: ["Cat", "Run", "She", "Blue"], answer: "She", explanation: "'She' is a pronoun." },
    { id: 49, category: "English Grammar", difficulty: "Medium", question: "What is the plural of 'child'?",
        options: ["Childs", "Childes", "Children", "Childrens"], answer: "Children",
        explanation: "The plural of 'child' is 'children'." },
    { id: 50, category: "English Grammar", difficulty: "Medium", question: "Which sentence is in passive voice?",
        options: ["She ate the cake.", "The cake was eaten by her.", "She is eating cake.", "She will eat cake."],
        answer: "The cake was eaten by her.", explanation: "Passive voice has the object as the subject." },
    { id: 51, category: "English Grammar", difficulty: "Hard", question: "What is a 'gerund'?",
        options: ["A verb acting as a noun", "A verb acting as an adjective", "A noun acting as a verb",
            "An adjective acting as a noun"
        ], answer: "A verb acting as a noun",
        explanation: "A gerund is a verb form ending in -ing that functions as a noun." },

    // More questions to reach 100+
    { id: 52, category: "General Knowledge", difficulty: "Medium", question: "What is the tallest mountain?",
        options: ["K2", "Everest", "Kilimanjaro", "Denali"], answer: "Everest",
        explanation: "Mount Everest is 8,848.86 meters." },
    { id: 53, category: "General Knowledge", difficulty: "Hard", question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], answer: "Leonardo da Vinci",
        explanation: "Leonardo da Vinci painted the Mona Lisa." },
    { id: 54, category: "Science", difficulty: "Hard", question: "What is the DNA of a cell called?",
        options: ["Genome", "Chromosome", "Gene", "Nucleotide"], answer: "Genome",
        explanation: "The genome is the complete set of DNA." },
    { id: 55, category: "Technology", difficulty: "Hard", question: "What is the main function of a router?",
        options: ["Amplify signals", "Route data between networks", "Store data", "Provide power"],
        answer: "Route data between networks", explanation: "A router directs data between networks." },
    { id: 56, category: "Mathematics", difficulty: "Hard", question: "What is the derivative of x²?",
        options: ["2x", "x", "2", "2x²"], answer: "2x", explanation: "The derivative of x² is 2x." },
    { id: 57, category: "Sports", difficulty: "Hard", question: "In which year were the first modern Olympics held?",
        options: ["1896", "1900", "1890", "1888"], answer: "1896",
        explanation: "The first modern Olympics were in Athens in 1896." },
    { id: 58, category: "History", difficulty: "Hard", question: "What was the first moon landing mission?",
        options: ["Apollo 11", "Apollo 13", "Gemini 7", "Mercury 3"], answer: "Apollo 11",
        explanation: "Apollo 11 landed on the moon on July 20, 1969." },
    { id: 59, category: "Geography", difficulty: "Hard", question: "What is the deepest point in the ocean?",
        options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"], answer: "Mariana Trench",
        explanation: "The Mariana Trench is about 11,000 meters deep." },
    { id: 60, category: "Computer Science", difficulty: "Hard", question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interface",
            "Application Process Interface", "Automated Programming Interface"
        ], answer: "Application Programming Interface",
        explanation: "API is a set of protocols for building software." },
    { id: 61, category: "Current Affairs", difficulty: "Hard", question: "What is the official currency of the EU?",
        options: ["Euro", "Pound", "Dollar", "Franc"], answer: "Euro",
        explanation: "The Euro is the official currency of 20 EU countries." },
    { id: 62, category: "English Grammar", difficulty: "Hard", question: "What is the superlative of 'good'?",
        options: ["Gooder", "Better", "Best", "Most good"], answer: "Best",
        explanation: "The superlative of 'good' is 'best'." },

    // Extra fillers
    { id: 63, category: "General Knowledge", difficulty: "Easy", question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale",
        explanation: "The Blue Whale is the largest mammal." },
    { id: 64, category: "General Knowledge", difficulty: "Medium", question: "Which country is 'Land of the Rising Sun'?",
        options: ["China", "Japan", "Thailand", "South Korea"], answer: "Japan",
        explanation: "Japan is called the 'Land of the Rising Sun'." },
    { id: 65, category: "General Knowledge", difficulty: "Easy", question: "How many continents are there?",
        options: ["5", "6", "7", "8"], answer: "7", explanation: "There are 7 continents." },
    { id: 66, category: "Science", difficulty: "Easy", question: "What gas do plants absorb?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide",
        explanation: "Plants absorb CO2 for photosynthesis." },
    { id: 67, category: "Science", difficulty: "Medium", question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Brain", "Heart"], answer: "Skin",
        explanation: "The skin is the largest organ." },
    { id: 68, category: "Science", difficulty: "Hard", question: "What is the atomic number of Carbon?",
        options: ["4", "6", "8", "12"], answer: "6", explanation: "Carbon has 6 protons." },
    { id: 69, category: "Technology", difficulty: "Easy", question: "What is Apple's mobile OS?",
        options: ["Android", "iOS", "Windows", "Linux"], answer: "iOS",
        explanation: "iOS is Apple's mobile operating system." },
    { id: 70, category: "Technology", difficulty: "Medium", question: "What is a firewall?",
        options: ["A physical barrier", "A network security system", "A type of virus", "A web browser"],
        answer: "A network security system", explanation: "A firewall monitors network traffic." },
    { id: 71, category: "Mathematics", difficulty: "Easy", question: "What is 1 + 1?",
        options: ["1", "2", "3", "4"], answer: "2", explanation: "1 + 1 = 2." },
    { id: 72, category: "Mathematics", difficulty: "Medium", question: "What is the area of a circle with radius 2?",
        options: ["4π", "2π", "π", "8π"], answer: "4π", explanation: "Area = πr² = 4π." },
    { id: 73, category: "Sports", difficulty: "Easy", question: "Which sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: "Badminton",
        explanation: "Badminton uses a shuttlecock." },
    { id: 74, category: "Sports", difficulty: "Medium", question: "How long is a marathon in km?",
        options: ["38.2", "42.2", "45.2", "50.2"], answer: "42.2",
        explanation: "A marathon is 42.195 kilometers." },
    { id: 75, category: "History", difficulty: "Easy", question: "Who discovered America in 1492?",
        options: ["Amerigo Vespucci", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama"],
        answer: "Christopher Columbus", explanation: "Columbus reached the Americas in 1492." },
    { id: 76, category: "History", difficulty: "Medium", question: "What was the Renaissance a revival of?",
        options: ["Religion", "Art and Learning", "Warfare", "Trade"], answer: "Art and Learning",
        explanation: "The Renaissance revived classical art and learning." },
    { id: 77, category: "Geography", difficulty: "Easy", question: "What is the largest lake in the world?",
        options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"], answer: "Caspian Sea",
        explanation: "The Caspian Sea is the largest lake by area." },
    { id: 78, category: "Geography", difficulty: "Medium", question: "Which country spans the most time zones?",
        options: ["Russia", "USA", "France", "China"], answer: "France",
        explanation: "France has 12 time zones including overseas." },
    { id: 79, category: "Computer Science", difficulty: "Easy", question: "What is 'bit' short for?",
        options: ["Binary Digit", "Binary Integer", "Basic Input", "Byte Unit"], answer: "Binary Digit",
        explanation: "Bit is short for Binary Digit." },
    { id: 80, category: "Computer Science", difficulty: "Medium", question: "Standard body font size for most websites?",
        options: ["12px", "14px", "16px", "18px"], answer: "16px",
        explanation: "16px is the standard body text size." },
    { id: 81, category: "Current Affairs", difficulty: "Easy", question: "Which country has the largest economy?",
        options: ["USA", "China", "Japan", "Germany"], answer: "USA",
        explanation: "The USA has the largest economy by nominal GDP." },
    { id: 82, category: "Current Affairs", difficulty: "Medium", question: "What is the new EU AI law called?",
        options: ["AI Act", "AI Regulation", "AI Directive", "AI Framework"], answer: "AI Act",
        explanation: "The EU AI Act is the world's first comprehensive AI law." },
    { id: 83, category: "English Grammar", difficulty: "Easy", question: "Which is a conjunction?",
        options: ["Cat", "And", "Run", "Quickly"], answer: "And",
        explanation: "'And' is a conjunction." },
    { id: 84, category: "English Grammar", difficulty: "Medium", question: "What is the past participle of 'eat'?",
        options: ["Ate", "Eaten", "Eating", "Eats"], answer: "Eaten",
        explanation: "'Eaten' is the past participle." },
    { id: 85, category: "General Knowledge", difficulty: "Medium", question: "Most spoken language in the world?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"], answer: "Mandarin Chinese",
        explanation: "Mandarin Chinese has the most native speakers." },
    { id: 86, category: "General Knowledge", difficulty: "Hard", question: "Smallest country by population?",
        options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"], answer: "Vatican City",
        explanation: "Vatican City has about 800 people." },
    { id: 87, category: "Science", difficulty: "Medium", question: "Chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl", "MgCl"], answer: "NaCl",
        explanation: "Table salt is sodium chloride (NaCl)." },
    { id: 88, category: "Science", difficulty: "Hard", question: "Study of the universe called?",
        options: ["Astronomy", "Astrophysics", "Cosmology", "Astrology"], answer: "Cosmology",
        explanation: "Cosmology is the study of the universe's origin." },
    { id: 89, category: "Technology", difficulty: "Medium", question: "Main language for iOS apps?",
        options: ["Java", "Swift", "Kotlin", "Python"], answer: "Swift",
        explanation: "Swift is the primary language for iOS." },
    { id: 90, category: "Technology", difficulty: "Hard", question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Very Personal Network", "Virtual Public Network",
            "Verified Private Network"
        ], answer: "Virtual Private Network", explanation: "VPN creates a secure connection." },
    { id: 91, category: "Mathematics", difficulty: "Medium", question: "LCM of 4 and 6?",
        options: ["8", "10", "12", "14"], answer: "12", explanation: "The LCM of 4 and 6 is 12." },
    { id: 92, category: "Mathematics", difficulty: "Hard", question: "sin(90°) value?",
        options: ["0", "0.5", "1", "√2/2"], answer: "1", explanation: "sin(90°) = 1." },
    { id: 93, category: "Sports", difficulty: "Medium", question: "Most NBA championships?",
        options: ["LA Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        answer: "Boston Celtics", explanation: "The Celtics have 18 championships." },
    { id: 94, category: "Sports", difficulty: "Hard", question: "First FIFA World Cup year?",
        options: ["1928", "1930", "1934", "1950"], answer: "1930",
        explanation: "The first World Cup was in Uruguay in 1930." },
    { id: 95, category: "History", difficulty: "Medium", question: "Ship that sank in 1912?",
        options: ["Titanic", "Lusitania", "Britannic", "Olympic"], answer: "Titanic",
        explanation: "The Titanic sank on its maiden voyage in 1912." },
    { id: 96, category: "History", difficulty: "Hard", question: "Longest reigning British monarch?",
        options: ["Queen Victoria", "Queen Elizabeth II", "George III", "Henry VIII"],
        answer: "Queen Elizabeth II", explanation: "Queen Elizabeth II reigned for over 70 years." },
    { id: 97, category: "Geography", difficulty: "Medium", question: "Largest island in the world?",
        options: ["Madagascar", "Greenland", "Borneo", "New Guinea"], answer: "Greenland",
        explanation: "Greenland is the largest island at 2.16 million km²." },
    { id: 98, category: "Geography", difficulty: "Hard", question: "Country with the most volcanoes?",
        options: ["Japan", "USA", "Indonesia", "Iceland"], answer: "Indonesia",
        explanation: "Indonesia has over 130 active volcanoes." },
    { id: 99, category: "Computer Science", difficulty: "Medium", question: "Storage unit after Terabyte?",
        options: ["Petabyte", "Exabyte", "Zettabyte", "Yottabyte"], answer: "Petabyte",
        explanation: "1 Petabyte = 1024 Terabytes." },
    { id: 100, category: "Computer Science", difficulty: "Hard", question: "First high-level programming language?",
        options: ["Fortran", "COBOL", "Lisp", "BASIC"], answer: "Fortran",
        explanation: "Fortran was developed in 1957." },
    { id: 101, category: "Current Affairs", difficulty: "Medium", question: "Which country left the EU in 2020?",
        options: ["UK", "France", "Germany", "Italy"], answer: "UK",
        explanation: "The UK officially left the EU on January 31, 2020." },
    { id: 102, category: "Current Affairs", difficulty: "Hard", question: "World's largest social media platform?",
        options: ["Facebook", "YouTube", "Instagram", "TikTok"], answer: "YouTube",
        explanation: "YouTube has over 2.5 billion monthly users." },
    { id: 103, category: "English Grammar", difficulty: "Medium", question: "Correct spelling?",
        options: ["Neccessary", "Necessary", "Necesary", "Neccesary"], answer: "Necessary",
        explanation: "'Necessary' is the correct spelling." },
    { id: 104, category: "English Grammar", difficulty: "Hard", question: "What is an oxymoron?",
        options: ["A contradiction in terms", "A type of metaphor", "A figure of speech", "A type of poem"],
        answer: "A contradiction in terms",
        explanation: "An oxymoron combines contradictory terms." },

    // ============================================================
    // NEW: 10 Questions for "General Science"
    // ============================================================
    { id: 105, category: "General Science", difficulty: "Easy", question: "What is the SI unit of electric current?",
        options: ["Ampere", "Volt", "Ohm", "Watt"], answer: "Ampere",
        explanation: "The ampere (A) is the SI base unit of electric current." },
    { id: 106, category: "General Science", difficulty: "Easy", question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen",
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere." },
    { id: 107, category: "General Science", difficulty: "Easy", question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Pluto"], answer: "Mercury",
        explanation: "Mercury is the smallest planet in our solar system." },
    { id: 108, category: "General Science", difficulty: "Easy", question: "What is the chemical symbol for Iron?",
        options: ["Fe", "Ir", "In", "I"], answer: "Fe",
        explanation: "Fe comes from the Latin 'ferrum' meaning iron." },
    { id: 109, category: "General Science", difficulty: "Medium", question: "What is the process of a liquid turning into a gas called?",
        options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"], answer: "Evaporation",
        explanation: "Evaporation is the phase transition from liquid to gas." },
    { id: 110, category: "General Science", difficulty: "Medium", question: "What is the name of the galaxy containing Earth?",
        options: ["Andromeda", "Milky Way", "Sombrero", "Triangulum"], answer: "Milky Way",
        explanation: "Earth is located in the Milky Way galaxy." },
    { id: 111, category: "General Science", difficulty: "Medium", question: "What is the pH value of pure water?",
        options: ["5", "6", "7", "8"], answer: "7",
        explanation: "Pure water has a neutral pH of 7." },
    { id: 112, category: "General Science", difficulty: "Medium", question: "What is the unit of frequency?",
        options: ["Hertz", "Newton", "Joule", "Watt"], answer: "Hertz",
        explanation: "The hertz (Hz) is the SI unit of frequency." },
    { id: 113, category: "General Science", difficulty: "Hard", question: "What is the main component of the Sun?",
        options: ["Helium", "Hydrogen", "Carbon", "Oxygen"], answer: "Hydrogen",
        explanation: "The Sun is about 73% hydrogen and 25% helium." },
    { id: 114, category: "General Science", difficulty: "Hard", question: "What is the study of the structure of matter called?",
        options: ["Chemistry", "Physics", "Biology", "Geology"], answer: "Chemistry",
        explanation: "Chemistry is the study of matter and its properties." },
];

const state = {
    name: '',
    avatar: '🧑‍🎓',
    theme: 'light',
    category: '',
    difficulty: 'Medium',
    questions: [],
    currentIndex: 0,
    answers: [],
    score: 0,
    correctCount: 0,
    incorrectCount: 0,
    skippedCount: 0,
    bookmarks: new Set(),
    timer: 20,
    timerInterval: null,
    isAnswered: false,
    startTime: null,
    timePerQuestion: [],
    quizHistory: [],
    achievements: [],
    soundEnabled: true,
};

function saveToStorage(key, data) {
    try { localStorage.setItem('quizverse_' + key, JSON.stringify(data)); } catch (e) {}
}

function getFromStorage(key, fallback) {
    try { const raw = localStorage.getItem('quizverse_' + key); return raw ? JSON.parse(raw) : fallback; } catch (
    e) { return fallback; }
}

function loadState() {
    const saved = getFromStorage('state', null);
    if (saved) {
        Object.assign(state, saved);
        if (saved.bookmarks) state.bookmarks = new Set(saved.bookmarks);
        if (saved.achievements) state.achievements = saved.achievements;
    }
    if (state.theme) document.documentElement.setAttribute('data-theme', state.theme);
    const s = getFromStorage('soundEnabled', true);
    state.soundEnabled = s;
}

function persistState() {
    const toSave = { ...state, bookmarks: Array.from(state.bookmarks), achievements: state.achievements };
    saveToStorage('state', toSave);
    saveToStorage('soundEnabled', state.soundEnabled);
}
class SoundManager {
    constructor() { this.ctx = null;
        this.enabled = true;
        this.init(); }
    init() { try { this.ctx = new(window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    play(type) {
        if (!this.enabled || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator(),
                gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            gain.gain.value = 0.10;
            switch (type) {
                case 'correct':
                    osc.frequency.value = 523;
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.25);
                    setTimeout(() => { const o2 = this.ctx.createOscillator(),
                            g2 = this.ctx.createGain();
                        o2.connect(g2);
                        g2.connect(this.ctx.destination);
                        g2.gain.value = 0.08;
                        o2.frequency.value = 659;
                        g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
                        o2.start();
                        o2.stop(this.ctx.currentTime + 0.25); }, 80);
                    break;
                case 'incorrect':
                    osc.frequency.value = 180;
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.4);
                    break;
                case 'click':
                    osc.frequency.value = 800;
                    gain.gain.value = 0.05;
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.06);
                    break;
                case 'achievement':
                    [523, 659, 784, 1047].forEach((f, i) => { setTimeout(() => { const o = this.ctx
                                .createOscillator(),
                                g = this.ctx.createGain();
                            o.connect(g);
                            g.connect(this.ctx.destination);
                            g.gain.value = 0.08;
                            o.frequency.value = f;
                            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
                            o.start();
                            o.stop(this.ctx.currentTime + 0.25); }, i * 100); });
                    break;
                case 'complete':
                    [523, 587, 659, 784, 880, 988, 1047].forEach((f, i) => { setTimeout(() => { const o =
                                this.ctx.createOscillator(),
                                g = this.ctx.createGain();
                            o.connect(g);
                            g.connect(this.ctx.destination);
                            g.gain.value = 0.07;
                            o.frequency.value = f;
                            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
                            o.start();
                            o.stop(this.ctx.currentTime + 0.3); }, i * 80); });
                    break;
            }
        } catch (e) {}
    }
    toggle() { this.enabled = !this.enabled; return this.enabled; }
}
const sound = new SoundManager();
class Confetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.pieces = [];
        this.running = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    resize() { this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight; }
    burst(count = 100) {
        if (this.running) return;
        this.running = true;
        this.pieces = [];
        const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f9ab00', '#0f9d58', '#d93025', '#818cf8', '#8b5cf6'];
        for (let i = 0; i < count; i++) {
            this.pieces.push({
                x: Math.random() * this.canvas.width,
                y: -10 - Math.random() * 30,
                w: 5 + Math.random() * 7,
                h: 5 + Math.random() * 7,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 7,
                vy: 2 + Math.random() * 4,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10,
                opacity: 1,
            });
        }
        this.animate();
        setTimeout(() => { this.running = false; }, 3500);
    }
    animate() {
        if (!this.running && this.pieces.length === 0) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const toRemove = [];
        this.pieces.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.035;
            p.rotation += p.rotSpeed;
            p.opacity -= 0.005;
            if (p.opacity <= 0 || p.y > this.canvas.height + 50) { toRemove.push(i); return; }
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = Math.max(0, p.opacity);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            this.ctx.restore();
        });
        for (const i of toRemove.sort((a, b) => b - a)) this.pieces.splice(i, 1);
        requestAnimationFrame(() => this.animate());
    }
}
const confetti = new Confetti();
function $(id) { return document.getElementById(id); }

function showScreen(id) {
    document.querySelectorAll('section[role="main"]').forEach(el => el.classList.add('hidden'));
    const screen = $(id);
    if (screen) screen.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shuffleArray(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i +
                1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

function getCategoryIcon(cat) {
    const map = { 'General Knowledge': 'fa-globe', 'Science': 'fa-flask', 'Technology': 'fa-microchip',
        'Mathematics': 'fa-calculator', 'Sports': 'fa-futbol', 'History': 'fa-landmark',
        'Geography': 'fa-earth-americas', 'Computer Science': 'fa-laptop-code',
        'Current Affairs': 'fa-newspaper', 'English Grammar': 'fa-book-open',
        'General Science': 'fa-atom' };
    return map[cat] || 'fa-question-circle';
}

function getDifficultyBadge(diff) {
    const map = { 'Easy': 'badge-easy', 'Medium': 'badge-medium', 'Hard': 'badge-hard' };
    return map[diff] || 'badge-medium';
}

function renderWelcome() {
    const highScore = getFromStorage('highScore', 0);
    const highScoreEl = document.getElementById('infoHighScore');
    if (highScoreEl) {
        highScoreEl.setAttribute('data-target', highScore);
        highScoreEl.textContent = '0';
    }

    const categoriesEl = document.getElementById('infoCategories');
    const questionsEl = document.getElementById('infoQuestions');
    const difficultiesEl = document.getElementById('infoDifficulties');

    const categories = new Set(QUESTION_DB.map(q => q.category)).size;
    const questions = QUESTION_DB.length;
    const difficulties = new Set(QUESTION_DB.map(q => q.difficulty)).size;

    if (categoriesEl) categoriesEl.setAttribute('data-target', categories);
    if (questionsEl) questionsEl.setAttribute('data-target', questions);
    if (difficultiesEl) difficultiesEl.setAttribute('data-target', difficulties);

    if (categoriesEl) categoriesEl.textContent = '0';
    if (questionsEl) questionsEl.textContent = '0';
    if (difficultiesEl) difficultiesEl.textContent = '0';
    animateCountUp();
}
function animateCountUp() {
    const counters = document.querySelectorAll('.number[data-target]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target) || target === 0) {
            counter.textContent = target;
            return;
        }
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easedProgress * target);
            counter.textContent = currentValue;
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        requestAnimationFrame(updateCounter);
    });
}
function renderProfile() {
    const cats = [...new Set(QUESTION_DB.map(q => q.category))].sort();
    const select = $('categorySelect');
    select.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
    if (state.category) select.value = state.category;
    $('playerName').value = state.name || '';
    $('difficultySelect').value = state.difficulty || 'Medium';
    document.querySelectorAll('.avatar-option').forEach(el => {
        el.classList.toggle('active', el.dataset.avatar === state.avatar);
    });
    document.querySelectorAll('.theme-option').forEach(el => {
        el.classList.toggle('active', el.dataset.theme === state.theme);
    });
}
function renderCategoryDashboard() {
    $('catGreetingName').textContent = state.name || 'Player';
    $('catAvatar').textContent = state.avatar || '🧑‍🎓';
    $('catBadgeName').textContent = state.name || 'Player';

    const cats = [...new Set(QUESTION_DB.map(q => q.category))].sort();
    const grid = $('categoryGrid');
    grid.innerHTML = cats.map(cat => {
        const qs = QUESTION_DB.filter(q => q.category === cat);
        const total = qs.length;
        const completed = getFromStorage('completed_' + cat, 0);
        const best = getFromStorage('best_' + cat, 0);
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const icon = getCategoryIcon(cat);
        const diffs = [...new Set(qs.map(q => q.difficulty))];
        return `
                    <div class="category-card" data-category="${cat}" onclick="startQuizByCategory('${cat}')">
                        <i class="fas ${icon} cat-icon"></i>
                        <div class="cat-name">${cat}</div>
                        <div class="cat-meta">
                            <span>${total} questions</span>
                            ${diffs.map(d => `<span class="badge ${getDifficultyBadge(d)}">${d}</span>`).join('')}
                        </div>
                        <div class="completion">
                            <span>${pct}% complete</span>
                            <div class="bar"><div class="fill" style="width:${pct}%;"></div></div>
                        </div>
                        ${best > 0 ? `<div class="best-score">🏆 Best: ${best}</div>` : ''}
                    </div>
                `;
    }).join('');
}
function startQuizByCategory(category, difficulty) {
    if (!category) category = state.category;
    const diff = difficulty || state.difficulty || 'Medium';
    state.category = category;
    state.difficulty = diff;
    let pool = QUESTION_DB.filter(q => q.category === category && q.difficulty === diff);
    if (pool.length < 5) pool = QUESTION_DB.filter(q => q.category === category);
    pool = shuffleArray([...pool]);
    const count = Math.min(pool.length, 15);
    state.questions = pool.slice(0, count);
    state.currentIndex = 0;
    state.answers = state.questions.map(() => ({ selected: null, isCorrect: null, skipped: false }));
    state.score = 0;
    state.correctCount = 0;
    state.incorrectCount = 0;
    state.skippedCount = 0;
    state.bookmarks = new Set();
    state.timePerQuestion = [];
    state.startTime = Date.now();
    state.isAnswered = false;
    state.quizHistory = [];

    showScreen('quiz-screen');
    renderQuiz();
    startTimer();
    updateProgress();
    updateBookmarks();
    persistState();
}

function renderQuiz() {
    const q = state.questions[state.currentIndex];
    if (!q) return;
    const total = state.questions.length,
        idx = state.currentIndex;

    $('quizUserName').textContent = state.name || 'Player';
    $('quizAvatar').textContent = state.avatar || '🧑‍🎓';
    $('quizCategory').textContent = state.category;
    $('quizDifficulty').textContent = state.difficulty;
    $('quizCurrentQ').textContent = idx + 1;
    $('quizTotalQ').textContent = total;
    $('quizScore').textContent = state.score;
    $('qNumberDisplay').textContent = `Question ${idx + 1} of ${total}`;
    $('qDifficultyBadge').textContent = state.difficulty;
    $('qDifficultyBadge').className = `badge ${getDifficultyBadge(state.difficulty)}`;
    $('qCategoryBadge').textContent = state.category;
    $('questionText').textContent = q.question;

    const letters = ['A', 'B', 'C', 'D'];
    const grid = $('optionsGrid');
    const answerData = state.answers[idx];
    const selected = answerData ? answerData.selected : null;
    const isCorrect = answerData ? answerData.isCorrect : null;
    const skipped = answerData ? answerData.skipped : false;

    const isDisabled = state.isAnswered || skipped || selected !== null;

    grid.innerHTML = q.options.map((opt, i) => {
        let cls = 'option-btn',
            icon = '';
        const isSelected = selected === opt;
        const isAnswer = opt === q.answer;

        if (isSelected && isCorrect === true) { cls += ' selected correct';
            icon = '<i class="fas fa-check-circle check-icon" style="color:var(--correct);"></i>'; } else if (
            isSelected && isCorrect === false) { cls += ' selected incorrect';
            icon = '<i class="fas fa-times-circle check-icon" style="color:var(--incorrect);"></i>'; } else if (
            isDisabled && isAnswer) {
            cls += ' correct';
            if (skipped || isCorrect === null) {
                icon = '<i class="fas fa-check-circle check-icon" style="color:var(--warning);"></i>';
            }
        }
        if (isDisabled) cls += ' disabled';

        return `
                    <button class="${cls}" data-option="${opt}" ${isDisabled ? 'disabled' : ''}>
                        <span class="letter">${letters[i]}</span>
                        ${opt}
                        ${icon}
                    </button>
                `;
    }).join('');

    grid.querySelectorAll('.option-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => selectOption(btn.dataset.option));
    });

    const panel = $('explanationPanel');
    if (selected || state.isAnswered || skipped) {
        panel.classList.add('show');
        $('explanationText').textContent = q.explanation || 'No explanation available.';
        $('explanationFact').textContent = `💡 ${q.category} · ${q.difficulty} level`;
        if (isCorrect === true) {
            panel.style.borderLeftColor = 'var(--correct)';
        } else if (isCorrect === false) {
            panel.style.borderLeftColor = 'var(--incorrect)';
        } else {
            panel.style.borderLeftColor = 'var(--warning)';
        }
    } else {
        panel.classList.remove('show');
    }

    $('prevBtn').disabled = idx === 0;
    $('nextBtn').disabled = idx === total - 1;

    const isBookmarked = state.bookmarks.has(idx);
    $('bookmarkBtn').innerHTML =
        `<i class="fas ${isBookmarked ? 'fa-bookmark' : 'fa-bookmark-regular'}"></i> ${isBookmarked ? 'Unbookmark' : 'Bookmark'}`;
    $('quizTimerDisplay').textContent = state.timer + 's';
    updateProgress();
    updateBookmarks();
}

function selectOption(option) {
    if (state.isAnswered) return;
    const idx = state.currentIndex,
        q = state.questions[idx];
    const isCorrect = option === q.answer;
    state.answers[idx].selected = option;
    state.answers[idx].isCorrect = isCorrect;
    state.answers[idx].skipped = false;
    state.isAnswered = true;
    clearInterval(state.timerInterval);

    if (isCorrect) {
        state.correctCount++;
        state.score += 10;
        if (state.timer > 15) state.score += 2;
        else if (state.timer > 10) state.score += 1;
        sound.play('correct');
    } else {
        state.incorrectCount++;
        sound.play('incorrect');
    }

    state.quizHistory.push({
        question: q.question,
        selected: option,
        correct: q.answer,
        isCorrect,
        explanation: q.explanation,
        category: q.category,
        difficulty: q.difficulty,
        skipped: false,
    });

    $('quizScore').textContent = state.score;
    renderQuiz();
    updateProgress();
    persistState();
    checkStreak();
}

function nextQuestion() {
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        state.isAnswered = false;
        resetTimer();
        renderQuiz();
        startTimer();
        updateProgress();
    }
}

function prevQuestion() {
    if (state.currentIndex > 0) {
        state.currentIndex--;
        state.isAnswered = false;
        resetTimer();
        renderQuiz();
        startTimer();
        updateProgress();
    }
}

function skipQuestion() {
    if (state.isAnswered) return;
    const idx = state.currentIndex;
    state.answers[idx].skipped = true;
    state.answers[idx].selected = null;
    state.answers[idx].isCorrect = null;
    state.skippedCount++;
    state.isAnswered = true;
    clearInterval(state.timerInterval);
    sound.play('click');

    state.quizHistory.push({
        question: state.questions[idx].question,
        selected: null,
        correct: state.questions[idx].answer,
        isCorrect: false,
        skipped: true,
        explanation: state.questions[idx].explanation,
        category: state.questions[idx].category,
        difficulty: state.questions[idx].difficulty,
    });

    renderQuiz();
    updateProgress();
    persistState();

    setTimeout(() => {
        if (state.currentIndex < state.questions.length - 1) {
            nextQuestion();
        } else {
            submitQuiz();
        }
    }, 700);
}

function toggleBookmark() {
    const idx = state.currentIndex;
    if (state.bookmarks.has(idx)) state.bookmarks.delete(idx);
    else state.bookmarks.add(idx);
    renderQuiz();
    updateBookmarks();
    persistState();
    sound.play('click');
}

function startTimer() {
    state.timer = 20;
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.timer--;
        updateTimerDisplay();
        if (state.timer <= 0) {
            clearInterval(state.timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(state.timerInterval);
    state.timer = 20;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const t = state.timer;
    $('timerText').textContent = t;
    $('quizTimerDisplay').textContent = t + 's';
    const circle = $('timerCircle');
    const circumference = 263.89;
    const maxTime = 20;
    const offset = circumference * (1 - t / maxTime);
    circle.style.strokeDashoffset = offset;
    if (t > 12) circle.style.stroke = 'var(--correct)';
    else if (t > 6) circle.style.stroke = 'var(--warning)';
    else circle.style.stroke = 'var(--incorrect)';
}

function handleTimeout() {
    if (state.isAnswered) return;
    const idx = state.currentIndex,
        q = state.questions[idx];
    state.answers[idx].skipped = true;
    state.answers[idx].selected = null;
    state.answers[idx].isCorrect = null;
    state.skippedCount++;
    state.isAnswered = true;
    state.quizHistory.push({
        question: q.question,
        selected: null,
        correct: q.answer,
        isCorrect: false,
        skipped: true,
        explanation: q.explanation,
        category: q.category,
        difficulty: q.difficulty,
    });
    renderQuiz();
    updateProgress();
    persistState();
    sound.play('incorrect');
    setTimeout(() => {
        if (state.currentIndex < state.questions.length - 1) nextQuestion();
        else submitQuiz();
    }, 1200);
}
function updateProgress() {
    const total = state.questions.length;
    const answered = state.answers.filter(a => a.selected !== null || a.skipped).length;
    const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
    $('progressPercent').textContent = pct + '%';
    $('progressFill').style.width = pct + '%';
    $('progressCorrect').textContent = state.correctCount;
    $('progressIncorrect').textContent = state.incorrectCount;
    $('progressSkipped').textContent = state.skippedCount;
    $('progressBookmarked').textContent = state.bookmarks.size;
}

function updateBookmarks() {
    const container = $('bookmarkItems');
    const items = Array.from(state.bookmarks).sort((a, b) => a - b);
    if (items.length === 0) {
        container.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">No bookmarks</span>';
        return;
    }
    container.innerHTML = items.map(idx => `
                <div class="bookmark-item">
                    <span class="b-num">Q${idx + 1}</span>
                    <button class="btn btn-sm btn-secondary" onclick="jumpToQuestion(${idx})" style="padding:2px 10px;font-size:0.7rem;">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `).join('');
}

function jumpToQuestion(idx) {
    state.currentIndex = idx;
    state.isAnswered = false;
    resetTimer();
    renderQuiz();
    startTimer();
    updateProgress();
}
function checkStreak() {
    const last5 = state.answers.slice(-5);
    if (last5.length >= 5 && last5.every(a => a.isCorrect === true)) {
        unlockAchievement('🔥 Streak Winner', '5 Correct Answers in a Row');
    }
    if (state.correctCount >= 5) {
        unlockAchievement('⚡ Fast Learner', 'Complete within time limit');
    }
    if (state.score >= 90) {
        unlockAchievement('🏆 Quiz Master', 'Score above 90%');
    }
    if (state.correctCount === state.questions.length && state.questions.length > 0) {
        unlockAchievement('🎯 Perfect Score', '100% Accuracy');
    }
    const scienceQs = state.questions.filter(q => q.category === 'Science');
    const scienceCorrect = state.answers.filter((a, i) =>
        a.isCorrect === true && state.questions[i].category === 'Science'
    ).length;
    if (scienceQs.length > 0 && scienceCorrect / scienceQs.length >= 0.8) {
        unlockAchievement('🧠 Science Expert', 'Highest Science Score');
    }
    const techQs = state.questions.filter(q => q.category === 'Technology');
    const techCorrect = state.answers.filter((a, i) =>
        a.isCorrect === true && state.questions[i].category === 'Technology'
    ).length;
    if (techQs.length > 0 && techCorrect / techQs.length >= 0.8) {
        unlockAchievement('💻 Tech Champion', 'Highest Technology Score');
    }
}

function unlockAchievement(name, desc) {
    if (state.achievements.some(a => a.name === name)) return;
    state.achievements.push({ name, desc, unlocked: Date.now() });
    persistState();
    sound.play('achievement');
    confetti.burst(70);
    showAchievementToast(name, desc);
}

function showAchievementToast(name, desc) {
    const toast = document.createElement('div');
    toast.style.cssText = `
                position:fixed; top:20px; left:50%; transform:translateX(-50%);
                background:var(--card-bg); backdrop-filter:var(--glass-blur);
                padding:14px 28px; border-radius:var(--radius);
                border:2px solid var(--warning); box-shadow:var(--shadow);
                z-index:10000; font-weight:600;
                animation:fadeInUp 0.5s ease;
                text-align:center; max-width:90%;
            `;
    toast.innerHTML = `
                <div style="font-size:1.8rem;">🏆</div>
                <div style="font-size:1rem;">Achievement Unlocked!</div>
                <div style="font-size:1.2rem;background:var(--gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${name}</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">${desc}</div>
            `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s';
        setTimeout(() => toast.remove(), 500); }, 3000);
}
function submitQuiz() {
    clearInterval(state.timerInterval);
    state.answers.forEach((a, i) => {
        if (a.selected === null && !a.skipped) {
            a.skipped = true;
            state.skippedCount++;
            state.quizHistory.push({
                question: state.questions[i].question,
                selected: null,
                correct: state.questions[i].answer,
                isCorrect: false,
                skipped: true,
                explanation: state.questions[i].explanation,
                category: state.questions[i].category,
                difficulty: state.questions[i].difficulty,
            });
        }
    });
    const total = state.questions.length;
    const attempted = state.correctCount + state.incorrectCount;
    const accuracy = attempted > 0 ? Math.round((state.correctCount / attempted) * 100) : 0;
    const totalPossible = total * 10;
    const pct = totalPossible > 0 ? Math.round((state.score / totalPossible) * 100) : 0;

    const highScore = getFromStorage('highScore', 0);
    if (state.score > highScore) saveToStorage('highScore', state.score);
    const completed = getFromStorage('completed_' + state.category, 0);
    const answeredTotal = state.answers.filter(a => a.selected !== null || a.skipped).length;
    if (answeredTotal > completed) saveToStorage('completed_' + state.category, answeredTotal);
    const best = getFromStorage('best_' + state.category, 0);
    if (state.score > best) saveToStorage('best_' + state.category, state.score);

    saveLeaderboardEntry({
        name: state.name || 'Player',
        score: state.score,
        category: state.category,
        accuracy: accuracy,
        date: new Date().toLocaleDateString(),
    });

    if (pct >= 90) unlockAchievement('🏆 Quiz Master', 'Score above 90%');
    if (pct === 100) unlockAchievement('🎯 Perfect Score', '100% Accuracy');
    if (state.correctCount >= 5) unlockAchievement('⚡ Fast Learner', 'Complete within time limit');

    sound.play('complete');
    if (pct >= 80) confetti.burst(130);
    showResults();
}
function showResults() {
    showScreen('results-screen');
    const catSelect = $('resultsCategorySelect');
    const cats = [...new Set(QUESTION_DB.map(q => q.category))].sort();
    catSelect.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
    catSelect.value = state.category || cats[0];
    $('resultsDifficultySelect').value = state.difficulty || 'Medium';

    const total = state.questions.length;
    const attempted = state.correctCount + state.incorrectCount;
    const accuracy = attempted > 0 ? Math.round((state.correctCount / attempted) * 100) : 0;
    const totalPossible = total * 10;
    const pct = totalPossible > 0 ? Math.round((state.score / totalPossible) * 100) : 0;

    let msg = '📚 Keep Practicing',
        emoji = '📚';
    if (pct >= 90) { msg = '🏆 Outstanding Performance';
        emoji = '🏆'; } else if (pct >= 75) { msg = '🥇 Excellent Work';
        emoji = '🥇'; } else if (pct >= 60) { msg = '👍 Good Job';
        emoji = '👍'; }

    $('resultsSubtext').textContent = `You scored ${state.score} points (${pct}%) — ${msg}`;
    const grid = $('resultsGrid');
    grid.innerHTML = `
                <div class="stat-card"><div class="stat-icon">📊</div><div class="stat-number">${state.score}</div><div class="stat-label">Total Score</div></div>
                <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-number">${accuracy}%</div><div class="stat-label">Accuracy</div></div>
                <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-number">${state.correctCount}</div><div class="stat-label">Correct</div></div>
                <div class="stat-card"><div class="stat-icon">❌</div><div class="stat-number">${state.incorrectCount}</div><div class="stat-label">Incorrect</div></div>
                <div class="stat-card"><div class="stat-icon">⏭️</div><div class="stat-number">${state.skippedCount}</div><div class="stat-label">Skipped</div></div>
                <div class="stat-card"><div class="stat-icon">⏱️</div><div class="stat-number">${Math.round((Date.now() - state.startTime) / 1000)}s</div><div class="stat-label">Time Taken</div></div>
                <div class="results-chart">
                    <h4 style="margin-bottom:10px;text-align:center;">📊 Performance Breakdown</h4>
                    <div class="chart-bars">
                        <div class="bar-item"><div class="bar correct-bar" style="height:${Math.max(4, (state.correctCount / total) * 120)}px;"></div><div class="bar-label">✅ Correct</div></div>
                        <div class="bar-item"><div class="bar incorrect-bar" style="height:${Math.max(4, (state.incorrectCount / total) * 120)}px;"></div><div class="bar-label">❌ Incorrect</div></div>
                        <div class="bar-item"><div class="bar skipped-bar" style="height:${Math.max(4, (state.skippedCount / total) * 120)}px;"></div><div class="bar-label">⏭️ Skipped</div></div>
                    </div>
                </div>
                <div class="performance-msg">${emoji} ${msg}</div>
                <div class="achievements-grid">
                    ${state.achievements.length > 0 ?
                        state.achievements.map(a => `<div class="achievement-badge"><i class="fas fa-trophy"></i> ${a.name}</div>`).join('') :
                        '<div style="color:var(--text-muted);font-size:0.85rem;">No achievements yet. Keep going!</div>'
                    }
                </div>
            `;
}

function saveLeaderboardEntry(entry) {
    const entries = getFromStorage('leaderboard', []);
    entries.push(entry);
    entries.sort((a, b) => b.score - a.score);
    saveToStorage('leaderboard', entries.slice(0, 10));
}

function deleteLeaderboardEntry(index) {
    let entries = getFromStorage('leaderboard', []);
    if (index >= 0 && index < entries.length) {
        entries.splice(index, 1);
        saveToStorage('leaderboard', entries);
        renderLeaderboard();
    }
}

function clearLeaderboard() {
    if (confirm('Are you sure you want to clear all leaderboard entries?')) {
        saveToStorage('leaderboard', []);
        renderLeaderboard();
    }
}

function renderLeaderboard() {
    const entries = getFromStorage('leaderboard', []);
    const tbody = $('leaderboardBody');
    if (entries.length === 0) {
        tbody.innerHTML =
            `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:28px;">No scores yet. Be the first!</td></tr>`;
        return;
    }
    tbody.innerHTML = entries.map((e, i) => `
                <tr>
                    <td class="rank">#${i + 1}</td>
                    <td>${e.name || 'Player'}</td>
                    <td><strong>${e.score}</strong></td>
                    <td>${e.category || '—'}</td>
                    <td>${e.accuracy || 0}%</td>
                    <td>${e.date || '—'}</td>
                    <td><button class="delete-btn" data-index="${i}" title="Delete this entry"><i class="fas fa-trash"></i></button></td>
                </tr>
            `).join('');

    tbody.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.index, 10);
            if (confirm(`Delete entry #${idx + 1}?`)) {
                deleteLeaderboardEntry(idx);
            }
        });
    });
}

function renderReview(filter = 'all') {
    const list = $('reviewList');
    let items = state.quizHistory;
    if (filter === 'correct') items = items.filter(h => h.isCorrect === true);
    else if (filter === 'incorrect') items = items.filter(h => h.isCorrect === false && !h.skipped);
    else if (filter === 'skipped') items = items.filter(h => h.skipped);

    if (items.length === 0) {
        list.innerHTML =
        '<div style="text-align:center;color:var(--text-muted);padding:28px;">No questions to review.</div>';
        return;
    }
    list.innerHTML = items.map((h, i) => {
        const status = h.skipped ? '⏭️ Skipped' : h.isCorrect ? '✅ Correct' : '❌ Incorrect';
        const statusClass = h.skipped ? 'r-skipped' : h.isCorrect ? 'r-correct' : 'r-wrong';
        return `
                    <div class="review-item">
                        <div class="r-q">Q${i + 1}: ${h.question}</div>
                        <div class="r-answers">
                            Your answer: ${h.selected || '—'} &nbsp;|&nbsp; Correct: <span class="r-correct">${h.correct}</span>
                            &nbsp;|&nbsp; <span class="${statusClass}">${status}</span>
                        </div>
                        ${h.explanation ? `<div class="r-exp">💡 ${h.explanation}</div>` : ''}
                    </div>
                `;
    }).join('');
}

// ============================================================
//  LOGOUT – clears user data and STAYS ON PROFILE SCREEN
// ============================================================
function performLogout() {
    // Clear session state
    state.name = '';
    state.avatar = '🧑‍🎓';
    state.category = '';
    state.difficulty = 'Medium';
    state.bookmarks = new Set();
    state.quizHistory = [];
    state.achievements = [];
    // Save cleared state
    persistState();
    // Show the profile screen with cleared fields – stay on same page
    showScreen('profile-screen');
    renderProfile();
}

function initEvents() {
    // Welcome → Profile
    $('getStartedBtn').addEventListener('click', () => { sound.play('click');
        showScreen('profile-screen');
        renderProfile(); });

    // Profile → Category (direct quiz start)
    $('startQuizBtn').addEventListener('click', () => {
        const name = $('playerName').value.trim() || 'Player';
        const avatar = document.querySelector('.avatar-option.active')?.dataset.avatar || '🧑‍🎓';
        const theme = document.querySelector('.theme-option.active')?.dataset.theme || 'light';
        const category = $('categorySelect').value;
        const difficulty = $('difficultySelect').value;

        state.name = name;
        state.avatar = avatar;
        state.theme = theme;
        state.category = category;
        state.difficulty = difficulty;

        document.documentElement.setAttribute('data-theme', theme);
        persistState();
        sound.play('click');

        startQuizByCategory(category, difficulty);
    });

    // Avatar selection
    document.querySelectorAll('.avatar-option').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(e => e.classList.remove('active'));
            el.classList.add('active');
            state.avatar = el.dataset.avatar;
            persistState();
        });
    });

    // Theme selection
    document.querySelectorAll('.theme-option').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.theme-option').forEach(e => e.classList.remove('active'));
            el.classList.add('active');
            state.theme = el.dataset.theme;
            document.documentElement.setAttribute('data-theme', state.theme);
            persistState();
        });
    });

    // Quiz nav
    $('nextBtn').addEventListener('click', () => { sound.play('click');
        nextQuestion(); });
    $('prevBtn').addEventListener('click', () => { sound.play('click');
        prevQuestion(); });
    $('skipBtn').addEventListener('click', () => { sound.play('click');
        skipQuestion(); });
    $('bookmarkBtn').addEventListener('click', () => { toggleBookmark(); });
    $('submitQuizBtn').addEventListener('click', () => {
        if (confirm('Submit quiz?')) { sound.play('click');
            submitQuiz(); }
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('quiz-screen').classList.contains('hidden')) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            if (!state.isAnswered) {
                const opts = document.querySelectorAll('.option-btn:not([disabled])');
                if (opts.length) {
                    const cur = document.activeElement;
                    if (cur && cur.classList.contains('option-btn')) {
                        const next = cur.nextElementSibling || opts[0];
                        if (next && next.classList.contains('option-btn')) next.focus();
                    } else opts[0].focus();
                }
            }
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const opts = document.querySelectorAll('.option-btn:not([disabled])');
            if (opts.length) {
                const cur = document.activeElement;
                if (cur && cur.classList.contains('option-btn')) {
                    const prev = cur.previousElementSibling || opts[opts.length - 1];
                    if (prev && prev.classList.contains('option-btn')) prev.focus();
                } else opts[0].focus();
            }
        }
        if (e.key === 'Enter') { const active = document.activeElement; if (active && active.classList.contains(
                'option-btn')) active.click(); }
        if (e.key === 'n' || e.key === 'N') { sound.play('click');
            nextQuestion(); }
        if (e.key === 'p' || e.key === 'P') { sound.play('click');
            prevQuestion(); }
        if (e.key === 's' || e.key === 'S') { sound.play('click');
            skipQuestion(); }
        if (e.key === 'b' || e.key === 'B') { toggleBookmark(); }
    });

    // Logout – from category dashboard (also stays on profile)
    $('catLogoutBtn').addEventListener('click', () => {
        sound.play('click');
        if (confirm('Logout?')) {
            performLogout();
        }
    });

    // Logout – from profile screen (new)
    $('profileLogoutBtn').addEventListener('click', () => {
        sound.play('click');
        if (confirm('Clear your profile and logout?')) {
            performLogout();
        }
    });

    $('reviewBtn').addEventListener('click', () => { sound.play('click');
        showScreen('review-screen');
        renderReview('all'); });
    $('leaderboardBtn').addEventListener('click', () => { sound.play('click');
        showScreen('leaderboard-screen');
        renderLeaderboard(); });
    $('retryBtn').addEventListener('click', () => { sound.play('click');
        startQuizByCategory(state.category, state.difficulty); });
    $('homeBtn').addEventListener('click', () => { sound.play('click');
        showScreen('welcome-screen');
        renderWelcome(); });

    // Results category selector start
    $('resultsStartQuizBtn').addEventListener('click', () => {
        const cat = $('resultsCategorySelect').value;
        const diff = $('resultsDifficultySelect').value;
        if (cat) {
            sound.play('click');
            startQuizByCategory(cat, diff);
        }
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReview(btn.dataset.filter);
        });
    });
    $('reviewBackBtn').addEventListener('click', () => { sound.play('click');
        showScreen('results-screen');
        showResults(); });
    $('leaderboardBackBtn').addEventListener('click', () => { sound.play('click');
        showScreen('results-screen');
        showResults(); });

    // Leaderboard clear
    $('clearLeaderboardBtn').addEventListener('click', clearLeaderboard);

    // Sound toggle
    $('soundToggle').addEventListener('click', () => {
        const enabled = sound.toggle();
        state.soundEnabled = enabled;
        $('soundToggle').innerHTML = `<i class="fas fa-volume-${enabled ? 'up' : 'mute'}"></i>`;
        persistState();
    });

    const savedSound = getFromStorage('soundEnabled', true);
    sound.enabled = savedSound;
    state.soundEnabled = savedSound;
    $('soundToggle').innerHTML = `<i class="fas fa-volume-${savedSound ? 'up' : 'mute'}"></i>`;
}
function init() {
    loadState();
    renderWelcome();
    if (state.name && state.category) {
        showScreen('category-screen');
        renderCategoryDashboard();
    } else {
        showScreen('welcome-screen');
    }
    initEvents();
    setTimeout(() => { document.getElementById('loader').classList.add('hide'); }, 500);
    setTimeout(() => renderWelcome(), 600);
}

window.startQuizByCategory = startQuizByCategory;
window.jumpToQuestion = jumpToQuestion;

document.addEventListener('DOMContentLoaded', init);
