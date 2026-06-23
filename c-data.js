// c-data.js
// Excellent Institute - C Programming & Data Structures Syllabus (Detailed Edition)

const cBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Introduction to C Language",
        topics: [
            {
                heading: "The Mother of All Languages",
                text: "C was created in 1972 by a man named Dennis Ritchie. It is often called the 'Mother of all languages' because almost every modern language (like C++, Java, and Python) copied its style. Even the Windows operating system and Android are mostly written in C!",
                codeSnippet: "If you learn C, learning any other language becomes very easy.",
                imgSrc: "images/c-01-intro.jpg"
            },
            {
                heading: "The Compiler (Your Translator)",
                text: "Computers only understand 'Machine Code'—a massive list of 0s and 1s. You cannot write in 0s and 1s! So, you write C code (which uses English words), and a special software called a 'Compiler' reads it, checks it for grammar mistakes, and translates it perfectly into Machine Code for the computer to run.",
                codeSnippet: "Human writes C Code -> Compiler translates it -> Computer runs 010011",
                imgSrc: "images/c-02-compiler.jpg"
            },
            {
                heading: "Syntax (The Grammar of Code)",
                text: "In English, a sentence must end with a full stop (.). In C, almost every command must end with a semicolon (;). This is called 'Syntax'. If you forget a semicolon, the Compiler gets confused and gives you a 'Syntax Error', refusing to run the program.",
                codeSnippet: "printf(\"I remember my semicolon!\");",
                imgSrc: "images/c-03-syntax.jpg"
            },
            {
                heading: "Breaking Down 'Hello World'",
                text: "Every C program starts with a main door called 'int main()'. Whatever you put inside its curly brackets {} is what runs. We also write '#include <stdio.h>' at the very top. Think of this as borrowing a dictionary from the library so the computer knows what words like 'printf' mean.",
                codeSnippet: "#include <stdio.h>\nint main() {\n  printf(\"Hello, World!\");\n  return 0;\n}",
                imgSrc: "images/c-04-hello.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Variables, Data Types, and Operators",
        topics: [
            {
                heading: "Variables (Storage Boxes)",
                text: "A 'Variable' is a labeled box in the computer's memory where you save data. But there are rules for the labels: a variable name cannot have spaces (use 'student_age', not 'student age'), it cannot start with a number, and it is case-sensitive ('Age' and 'age' are two different boxes).",
                codeSnippet: "int student_age = 15; // Creates a box named student_age and puts 15 inside.",
                imgSrc: "images/c-05-variables.jpg"
            },
            {
                heading: "Data Types (Different Sized Boxes)",
                text: "You must tell the computer what type of data you are storing so it knows how big of a box to build. 'int' is for whole numbers (like 10). 'float' is for decimals (like 99.5). 'char' is for a single letter wrapped in single quotes (like 'A').",
                codeSnippet: "int age = 15;\nfloat weight = 50.5;\nchar grade = 'A';",
                imgSrc: "images/c-06-datatypes.jpg"
            },
            {
                heading: "Format Specifiers (Printing the Boxes)",
                text: "When you want to print what is inside a box to the screen, you use a secret code called a Format Specifier. Use '%d' to print an int, '%f' to print a float, and '%c' to print a char. The computer sees the secret code and replaces it with the variable's value.",
                codeSnippet: "printf(\"I am %d years old, and my grade is %c\", age, grade);",
                imgSrc: "images/c-07-format.jpg"
            },
            {
                heading: "Math and Logic Operators",
                text: "Operators do the math. You know +, -, *, and / (divide). But C has a special one: the Modulo '%'. It gives you the REMAINDER of a division (10 % 3 = 1). We also have Logic Operators: '&&' means AND (both must be true), and '||' means OR (only one needs to be true).",
                codeSnippet: "if (age > 10 && grade == 'A') { ... } // Checks two things at once",
                imgSrc: "images/c-08-operators.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Conditional Statements and Loops",
        topics: [
            {
                heading: "If, Else If, Else (Making Choices)",
                text: "The computer can make decisions based on rules. 'If' is the first check. 'Else If' is a backup check. 'Else' is the final action if everything else fails. It's like saying: IF I have ₹100, buy Pizza. ELSE IF I have ₹50, buy a Burger. ELSE, just drink water.",
                codeSnippet: "if (marks >= 80) { printf(\"A\"); }\nelse if (marks >= 60) { printf(\"B\"); }\nelse { printf(\"Fail\"); }",
                imgSrc: "images/c-09-ifelse.jpg"
            },
            {
                heading: "Switch Case (The Restaurant Menu)",
                text: "If you have 10 different options, writing 10 'Else If' lines gets very messy. A 'Switch' statement acts like a restaurant menu. You give it a choice (like Day 1, Day 2), and it jumps directly to that specific 'Case'. You must put a 'break;' at the end of a case so it stops there.",
                codeSnippet: "switch(day) {\n  case 1: printf(\"Monday\"); break;\n  case 2: printf(\"Tuesday\"); break;\n}",
                imgSrc: "images/c-10-switch.jpg"
            },
            {
                heading: "For Loops (The Counting Machine)",
                text: "A Loop repeats code. A 'For' loop is best when you know exactly how many times you want to repeat. It has 3 parts: Start counting (int i=1), Stop condition (i<=10), and Step size (i++ means add 1 each time).",
                codeSnippet: "for (int i = 1; i <= 5; i++) {\n  printf(\"Hello %d\", i);\n} // Prints Hello 5 times",
                imgSrc: "images/c-11-forloop.jpg"
            },
            {
                heading: "While and Do-While Loops",
                text: "A 'While' loop repeats code as long as a rule is true, without a set counting number (like 'Keep playing while health > 0'). A 'Do-While' loop is unique: it runs the code ONCE first, and THEN checks the rule. It’s like tasting food before deciding if you like it.",
                codeSnippet: "int hp = 100;\nwhile (hp > 0) {\n  printf(\"Keep fighting!\");\n}",
                imgSrc: "images/c-12-while.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Functions and Arrays",
        topics: [
            {
                heading: "Functions (Mini Code Factories)",
                text: "A Function is a block of code you write once and reuse. Think of it like a juice machine. You give it ingredients (called Parameters), the machine processes them, and it gives you back the juice (called a Return Value). The main code just calls the machine by its name when needed.",
                codeSnippet: "int AddNumbers(int a, int b) {\n  return a + b;\n}\n// In main: int sum = AddNumbers(5, 10);",
                imgSrc: "images/c-13-functions.jpg"
            },
            {
                heading: "Arrays (A Train of Data)",
                text: "If you need to store marks for 50 students, creating 50 variables is a nightmare. An Array is one single variable shaped like a train with 50 compartments. The most important rule in C: Arrays always start counting at 0! So the first compartment is [0], and the 50th is [49].",
                codeSnippet: "int marks[5] = {90, 85, 78, 92, 88};\nprintf(\"%d\", marks[0]); // Prints 90",
                imgSrc: "images/c-14-arrays.jpg"
            },
            {
                heading: "2D Arrays (Matrices / Grids)",
                text: "A normal Array is a straight line. A 2D Array is a grid, like the seating chart in a movie theater with Rows and Columns. You need two numbers to find a seat: Row 2, Column 3. They are perfect for making board games like Tic-Tac-Toe or Chess.",
                codeSnippet: "int theater[3][4]; // Creates a grid with 3 Rows and 4 Columns",
                imgSrc: "images/c-15-2darray.jpg"
            },
            {
                heading: "Strings (Word Arrays)",
                text: "C doesn't have a built-in 'String' box for full words. Instead, C treats a word as an Array of Characters. The word 'HELLO' is actually an array of 5 letters. C secretly adds a 6th invisible character called the Null Terminator ('\\0') to know where the word stops.",
                codeSnippet: "char name[6] = \"HELLO\"; // H-E-L-L-O-\\0",
                imgSrc: "images/c-16-strings.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Pointers and Structures",
        topics: [
            {
                heading: "Memory Addresses (&)",
                text: "Every time you create a variable, the computer saves it in a tiny locker in its RAM. Every locker has a unique house number, like 0x7FFA. If you put an ampersand (&) in front of a variable, it tells you the exact house number where the data is living.",
                codeSnippet: "int age = 15;\nprintf(\"Age is stored at memory address: %p\", &age);",
                imgSrc: "images/c-17-address.jpg"
            },
            {
                heading: "Pointers (The Treasure Map)",
                text: "A Pointer is a special variable that does not hold a normal number. It holds a Memory Address! It acts like a treasure map pointing to where another variable lives. If you put a star (*) in front of the pointer, it 'opens the locker' and gets the actual value inside.",
                codeSnippet: "int age = 15;\nint *ptr = &age;  // ptr now holds the map to 'age'\nprintf(\"%d\", *ptr); // * opens the map and prints 15",
                imgSrc: "images/c-18-pointers.jpg"
            },
            {
                heading: "Structures (Custom Data Backpacks)",
                text: "An Array can only hold one type of thing (like 10 int numbers). But a student has a Name (chars), Roll No (int), and Percentage (float). A 'struct' lets you design a custom backpack to hold different data types together. You use a dot (.) to open the backpack and get specific items.",
                codeSnippet: "struct Student { char name[20]; int roll; };\nstruct Student s1;\ns1.roll = 45;",
                imgSrc: "images/c-19-structures.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Introduction to Data Structures",
        topics: [
            {
                heading: "Why Organize Data?",
                text: "Imagine looking for a specific book in a library where a million books are dumped in a pile on the floor. It would take weeks! A Data Structure is like the library shelves—a highly specific way to organize data inside the computer's memory so it can be searched, sorted, and retrieved with lightning speed.",
                codeSnippet: "Good Data Structure = Fast Software.\nBad Data Structure = Lagging Software.",
                imgSrc: "images/c-20-ds-intro.jpg"
            },
            {
                heading: "Static vs. Dynamic Memory",
                text: "An Array is 'Static'. If you build an array of 10 boxes, you cannot add an 11th box later. It is rigid. 'Dynamic' Memory uses special C functions like malloc() to ask the computer to build new boxes while the program is running, giving you flexible memory that grows and shrinks as needed.",
                codeSnippet: "malloc(size); // Asks the computer to give you flexible memory space",
                imgSrc: "images/c-21-dynamic.jpg"
            },
            {
                heading: "Time Complexity (Big O Notation)",
                text: "Programmers don't measure speed in seconds because some computers are faster than others. They measure speed in 'Steps' using Big O notation. O(1) means the task takes 1 step (instant). O(N) means if there are 100 items, it takes 100 steps to check them all.",
                codeSnippet: "O(1) is incredible speed. O(N) is normal speed.",
                imgSrc: "images/c-22-bigo.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Stack and Queue",
        topics: [
            {
                heading: "The Stack (LIFO Principle)",
                text: "A Stack works exactly like a stack of plates in a cafeteria. If you add a plate, it goes on TOP. If you take a plate, you take from the TOP. This is called Last In, First Out (LIFO). The 'Undo' button (Ctrl+Z) in MS Word uses a Stack to remember your last action!",
                codeSnippet: "Push = Add to top of stack.\nPop = Remove from top of stack.",
                imgSrc: "images/c-23-stack.jpg"
            },
            {
                heading: "The Queue (FIFO Principle)",
                text: "A Queue works exactly like a line of people buying movie tickets. The person who gets in line FIRST gets their ticket FIRST. The person who joins LAST goes to the BACK. This is First In, First Out (FIFO). Network printers use Queues to print documents in the order they were received.",
                codeSnippet: "Enqueue = Join the back of the line.\nDequeue = Leave the front of the line.",
                imgSrc: "images/c-24-queue.jpg"
            },
            {
                heading: "Circular Queues",
                text: "In a normal Array Queue, once people leave the front, those boxes stay empty and wasted. A Circular Queue connects the very last box back to the very first box, like a ring of musical chairs. This saves memory and is highly efficient for repeating tasks.",
                codeSnippet: "Last Box -> loops back to -> First Box",
                imgSrc: "images/c-25-circular.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Linked Lists and Trees",
        topics: [
            {
                heading: "Singly Linked Lists (The Paper Chain)",
                text: "In an Array, memory boxes are stuck together in a row. In a Linked List, the boxes are scattered all over the computer. To connect them, each box (called a Node) holds its Data, plus a Pointer (a map) leading to the next box. You can easily unhook a chain to insert new data in the middle!",
                codeSnippet: "[Data | Pointer] -> [Data | Pointer] -> [Data | NULL]",
                imgSrc: "images/c-26-singly.jpg"
            },
            {
                heading: "Doubly Linked Lists",
                text: "A Singly Linked List is like a one-way street; you can only read data going forward. A Doubly Linked List gives each box TWO pointers: one pointing to the next box, and one pointing to the previous box. This lets you read the data backward, which is how the 'Next Page / Previous Page' buttons work on a web browser.",
                codeSnippet: "[Prev | Data | Next] <-> [Prev | Data | Next]",
                imgSrc: "images/c-27-doubly.jpg"
            },
            {
                heading: "Trees & Hierarchies",
                text: "Sometimes data naturally branches out. Think of the files on your computer: Your C: Drive (the Root) opens into Folders (Branches), which open into Files (Leaves). A Tree data structure organizes data in these branching layers instead of a flat line.",
                codeSnippet: "Root Node -> Branch Nodes -> Leaf Nodes",
                imgSrc: "images/c-28-trees.jpg"
            },
            {
                heading: "Binary Search Trees (The Guessing Game)",
                text: "A Binary Search Tree (BST) is a smart tree where smaller numbers always go to the left branch, and bigger numbers go to the right branch. If you are searching for the number 50 among a million items, the tree ignores half the data at every step. It finds the answer almost instantly!",
                codeSnippet: "Left Child < Parent < Right Child",
                imgSrc: "images/c-29-bst.jpg"
            }
        ]
    }
];
