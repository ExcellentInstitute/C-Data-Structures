// c-data.js
// Excellent Institute - C Programming & Data Structures Syllabus

const cBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Introduction to C Language",
        topics: [
            {
                heading: "What is C?",
                text: "Imagine you want to talk to someone from Japan, but you only know Hindi. You need a translator! The computer only speaks in '0s and 1s' (Binary). 'C' is a language that humans can easily write, which a translator turns into 0s and 1s for the computer.",
                codeSnippet: "Computers only understand Machine Code (010011).",
                imgSrc: "images/c-01-intro.jpg"
            },
            {
                heading: "The Compiler (Your Translator)",
                text: "When you write a story in C, the computer cannot read it instantly. You use a special software called a 'Compiler'. The compiler reads your English-like C code, checks it for spelling mistakes, and translates it perfectly so the computer can run it.",
                codeSnippet: "Source Code -> Compiler -> Machine Code",
                imgSrc: "images/c-02-compiler.jpg"
            },
            {
                heading: "Your First Program (Hello World)",
                text: "Every programmer's first step is making the computer say 'Hello'. We use a special word called 'printf' which tells the screen to print whatever words we put inside the brackets.",
                codeSnippet: "printf(\"Hello, Excellent Institute!\");",
                imgSrc: "images/c-03-hello.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Variables, Data Types, and Operators",
        topics: [
            {
                heading: "Variables (Storage Boxes)",
                text: "Think of a 'Variable' as a cardboard box where you can store things. If you want to remember a student's age, you create a box, stick a label on it named 'age', and put the number 14 inside it.",
                codeSnippet: "int age = 14;",
                imgSrc: "images/c-04-variables.jpg"
            },
            {
                heading: "Data Types (Different Sized Boxes)",
                text: "You wouldn't put an elephant in a matchbox! In C, you must tell the computer what type of box you need. 'int' is a box for whole numbers (like 5). 'float' is a box for decimals (like 5.5). 'char' is a small box for a single letter (like 'A').",
                codeSnippet: "float marks = 85.5; \\\\ A box for decimals",
                imgSrc: "images/c-05-datatypes.jpg"
            },
            {
                heading: "Operators (The Math Symbols)",
                text: "Operators are just symbols that do math or compare things. You use '+' to add, '-' to subtract, '*' to multiply, and '/' to divide. You can also use '>' to ask the computer if one box is bigger than another.",
                codeSnippet: "int total = 10 + 5; \\\\ total box now holds 15",
                imgSrc: "images/c-06-operators.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Conditional Statements and Loops",
        topics: [
            {
                heading: "If-Else (Making Decisions)",
                text: "Computers are smart because they can make choices. The 'If-Else' statement is like a crossroad. You tell the computer: 'IF the marks are greater than 30, print Pass. ELSE (otherwise), print Fail.'",
                codeSnippet: "if (marks > 30) { printf(\"Pass\"); } else { printf(\"Fail\"); }",
                imgSrc: "images/c-07-ifelse.jpg"
            },
            {
                heading: "Loops (The Magic Repeater)",
                text: "If your teacher tells you to write 'I will not talk in class' 100 times, your hand will hurt. But a computer doesn't get tired! A 'Loop' tells the computer to repeat the same block of code over and over until it finishes counting.",
                codeSnippet: "for(int i=1; i<=100; i++) { printf(\"I will not talk\"); }",
                imgSrc: "images/c-08-loops.jpg"
            },
            {
                heading: "While Loops (Wait until told to stop)",
                text: "A 'For' loop stops when it reaches an exact number. A 'While' loop is like waiting for the bus. It tells the computer: 'Keep waiting WHILE the bus has not arrived.' It repeats the action until a specific rule is broken.",
                codeSnippet: "while(bus == NOT_HERE) { printf(\"Still waiting...\"); }",
                imgSrc: "images/c-09-while.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Functions and Arrays",
        topics: [
            {
                heading: "Functions (Mini Factories)",
                text: "If you have to make 10 cups of tea, you don't read the recipe 10 times. You memorize the recipe once, and just use it. A 'Function' is a block of code you write once, give a name (like 'MakeTea'), and then you can ask the computer to run it anytime you want without retyping the code.",
                codeSnippet: "void MakeTea() { printf(\"Boil water, add tea leaves.\"); }",
                imgSrc: "images/c-10-functions.jpg"
            },
            {
                heading: "Arrays (A Train of Boxes)",
                text: "If you want to store the marks of 50 students, creating 50 separate variables (box1, box2, box3) is exhausting. An 'Array' is like a train with 50 connected compartments. You give the train one name, and each compartment holds a different student's mark.",
                codeSnippet: "int marks[50]; \\\\ A train with 50 empty boxes for numbers",
                imgSrc: "images/c-11-arrays.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Pointers and Structures",
        topics: [
            {
                heading: "Pointers (The Treasure Map)",
                text: "This is C's most famous trick! A normal variable stores a number. But a 'Pointer' is a sticky note that stores a LOCATION. It tells the computer exactly which street and house number (Memory Address) to go to in order to find the data.",
                codeSnippet: "int *ptr = &age; \\\\ ptr now holds the secret map to the 'age' box",
                imgSrc: "images/c-12-pointers.jpg"
            },
            {
                heading: "Structures (Custom Backpacks)",
                text: "An Array only holds ONE type of thing (like a box of only apples). But what if you want to store a student's Name (letters), Roll Number (whole number), and Percentage (decimals) together? A 'Structure' lets you build a custom backpack that can hold all these different things in one place.",
                codeSnippet: "struct Student { char name[20]; int roll; float marks; };",
                imgSrc: "images/c-13-structs.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Introduction to Data Structures",
        topics: [
            {
                heading: "What is a Data Structure?",
                text: "Imagine your bedroom. If you throw all your clothes, books, and toys on the floor, it takes forever to find your socks. If you use a wardrobe with drawers, finding socks takes one second! A 'Data Structure' is just a way of neatly organizing data inside the computer so it can be found super fast.",
                codeSnippet: "Good Organization = Very Fast Software",
                imgSrc: "images/c-14-datastructures.jpg"
            },
            {
                heading: "Why do we need them?",
                text: "When you search for a video on YouTube, it searches through billions of videos in less than a second. It doesn't check them one by one. It uses advanced Data Structures to magically skip to the exact right video.",
                codeSnippet: "Speed and Efficiency are the goals of Data Structures.",
                imgSrc: "images/c-15-why-ds.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Stack and Queue",
        topics: [
            {
                heading: "The Stack (Plates in a Cafeteria)",
                text: "A Stack works exactly like a tall stack of plates. If you add a new plate, you put it on TOP. If you take a plate off, you must take the one from the TOP. The rule is called LIFO (Last In, First Out). The last plate added is the first one removed.",
                codeSnippet: "Push (Add to top) \\\\ Pop (Remove from top)",
                imgSrc: "images/c-16-stack.jpg"
            },
            {
                heading: "The Queue (Line at the Cinema)",
                text: "A Queue works exactly like a line of people waiting to buy movie tickets. The person who gets in line FIRST gets their ticket FIRST. The person who joins LAST goes to the BACK. The rule is called FIFO (First In, First Out).",
                codeSnippet: "Enqueue (Join the back) \\\\ Dequeue (Leave the front)",
                imgSrc: "images/c-17-queue.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Linked Lists and Trees",
        topics: [
            {
                heading: "Linked Lists (The Treasure Hunt)",
                text: "In an Array, all the boxes sit right next to each other. In a Linked List, the boxes are scattered all over the computer! To connect them, each box holds its data AND a secret 'Pointer' map showing exactly where the next box is hiding.",
                codeSnippet: "[Data | Map] -> [Data | Map] -> [Data | NULL]",
                imgSrc: "images/c-18-linkedlist.jpg"
            },
            {
                heading: "Trees (The Family Chart)",
                text: "Sometimes data is not a straight line. Think of a family tree: A grandfather at the top, who connects to two parents, who connect to four children. A 'Tree' data structure organizes data in these branching layers, making it incredibly fast to search through huge amounts of information.",
                codeSnippet: "Root (Top) -> Branches -> Leaves (Bottom)",
                imgSrc: "images/c-19-trees.jpg"
            }
        ]
    }
];
