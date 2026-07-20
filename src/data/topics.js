const topics = [
 {
  id: 1,

  title: "Introduction to Programming",

  englishDefinition:
    "Programming is the process of writing instructions that tell a computer how to perform specific tasks. These instructions are written using programming languages like Java, Python, and C++.",

  tamilDefinition:
    "Programming என்பது கணினிக்கு குறிப்பிட்ட வேலைகளைச் செய்ய வழிமுறைகளை (Instructions) எழுதும் செயல்முறையாகும். இந்த வழிமுறைகள் Java, Python, C++ போன்ற Programming Language-களை பயன்படுத்தி எழுதப்படுகின்றன.",

  realWorldUsage:
    "Developers use programming to build websites, mobile applications, games, banking software, hospital management systems, and many other software applications.",

  syntax: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

    }

}`,

  syntaxExplanationEnglish: [
    "public class Main → Creates a class named Main.",
    "public static void main(String[] args) → This is the main method where Java starts executing the program.",
    'System.out.println("Hello, World!"); → Prints the text "Hello, World!" on the console.'
  ],

  syntaxExplanationTamil: [
    "public class Main → Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "public static void main(String[] args) → Program இயங்கத் தொடங்கும் முக்கியமான Method இதுவாகும்.",
    'System.out.println("Hello, World!"); → "Hello, World!" என்ற செய்தியை திரையில் காட்டுகிறது.'
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome to Java!");

    }

}`,

  programExplanationEnglish: [
    "Line 1: A class named Main is created.",
    "Line 3: The main() method is the starting point of every Java program.",
    'Line 5: The println() statement displays "Welcome to Java!" on the console.',
    "When this program runs, the output will be displayed on the screen."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    'வரி 5: println() மூலம் "Welcome to Java!" என்ற செய்தி திரையில் காட்டப்படுகிறது.',
    "Program இயங்கிய பிறகு இந்த வெளியீடு (Output) Console-ல் காணப்படும்."
  ],

  output: `Welcome to Java!`,

  locked: false,

  completed: false,
},
  {
  id: 2,

  title: "Variables",

  englishDefinition:
    "A variable is a named memory location used to store data. The value stored in a variable can be changed during program execution unless it is declared as final.",

  tamilDefinition:
    "Variable என்பது தரவுகளை (Data) சேமித்து வைக்க பயன்படும் பெயரிடப்பட்ட நினைவக இடமாகும் (Memory Location). Program இயங்கும் போது Variable-ல் உள்ள மதிப்பை மாற்றலாம். ஆனால் final என்று அறிவிக்கப்பட்ட Variable-ன் மதிப்பை மாற்ற முடியாது.",

  realWorldUsage:
    "Developers use variables to store information such as usernames, account balances, product prices, marks, login status, and many other values while building software applications.",

  syntax: `dataType variableName = value;

// Example
int age = 20;`,

  syntaxExplanationEnglish: [
    "dataType → Specifies the type of data that the variable can store.",
    "variableName → The name given to the variable.",
    "= → Assignment operator used to assign a value.",
    "value → The data stored inside the variable.",
    "Every variable must have a valid name and a compatible value."
  ],

  syntaxExplanationTamil: [
    "dataType → Variable எந்த வகை தரவை (Data) சேமிக்க வேண்டும் என்பதை குறிப்பிடுகிறது.",
    "variableName → Variable-க்கு கொடுக்கப்படும் பெயர்.",
    "= → மதிப்பை Variable-க்கு ஒதுக்க பயன்படும் Assignment Operator.",
    "value → Variable-ல் சேமிக்கப்படும் தரவு.",
    "ஒவ்வொரு Variable-க்கும் சரியான பெயரும் அதற்கேற்ற மதிப்பும் இருக்க வேண்டும்."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        int age = 20;

        String name = "Deepak";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the entry point of the Java program.",
    "Line 5: Declares an integer variable named age and stores the value 20.",
    "Line 7: Declares a String variable named name and stores 'Deepak'.",
    "Line 9: Prints the value stored in the name variable.",
    "Line 10: Prints the value stored in the age variable."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: age என்ற Integer Variable உருவாக்கப்பட்டு 20 என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 7: name என்ற String Variable உருவாக்கப்பட்டு 'Deepak' என்ற மதிப்பு சேமிக்கப்படுகிறது.",
    "வரி 9: name Variable-ல் உள்ள மதிப்பு திரையில் காட்டப்படுகிறது.",
    "வரி 10: age Variable-ல் உள்ள மதிப்பு திரையில் காட்டப்படுகிறது."
  ],

  output: `Name: Deepak
Age: 20`,

  locked: true,

  completed: false
},
 {
  id: 3,

  title: "Data Types",

  englishDefinition:
    "A data type specifies the kind of value a variable can store. Different data types are used to store numbers, characters, text, and true or false values.",

  tamilDefinition:
    "Data Type என்பது ஒரு Variable எந்த வகையான தரவை (Data) சேமிக்க வேண்டும் என்பதை குறிப்பிடுகிறது. எண்கள், எழுத்துகள், வார்த்தைகள் மற்றும் True அல்லது False போன்ற மதிப்புகளை சேமிக்க வெவ்வேறு Data Types பயன்படுத்தப்படுகின்றன.",

  realWorldUsage:
    "Developers use data types to store different kinds of information such as age, salary, marks, names, grades, and login status while building software applications.",

  syntax: `dataType variableName = value;

// Examples
int age = 20;
double cgpa = 8.9;
char grade = 'A';
String name = "Deepak";
boolean placed = false;`,

  syntaxExplanationEnglish: [
    "dataType → Specifies the type of data to be stored.",
    "variableName → The name of the variable.",
    "= → Assignment operator used to assign a value.",
    "value → The actual data stored in the variable.",
    "Each variable must store a value that matches its data type."
  ],

  syntaxExplanationTamil: [
    "dataType → Variable எந்த வகை தரவை சேமிக்க வேண்டும் என்பதை குறிப்பிடுகிறது.",
    "variableName → Variable-க்கு கொடுக்கப்படும் பெயர்.",
    "= → மதிப்பை Variable-க்கு ஒதுக்க பயன்படும் Assignment Operator.",
    "value → Variable-ல் சேமிக்கப்படும் உண்மையான தரவு.",
    "ஒவ்வொரு Variable-லும் அதன் Data Type-க்கு பொருந்தும் மதிப்பே சேமிக்கப்பட வேண்டும்."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        int age = 20;
        String name = "Deepak";
        double cgpa = 8.9;
        char grade = 'A';
        boolean placed = false;
        String aim = "Front-End Developer";

        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
        System.out.println("CGPA : " + cgpa);
        System.out.println("Grade : " + grade);
        System.out.println("Placed : " + placed);
        System.out.println("Aim : " + aim);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is where the program starts executing.",
    "Line 5: Stores the age using the int data type.",
    "Line 6: Stores the name using the String data type.",
    "Line 7: Stores the CGPA using the double data type.",
    "Line 8: Stores the grade using the char data type.",
    "Line 9: Stores the placement status using the boolean data type.",
    "Line 10: Stores the career aim using the String data type.",
    "Lines 12–17: Displays all the stored values on the console."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: int Data Type பயன்படுத்தி வயது (Age) சேமிக்கப்படுகிறது.",
    "வரி 6: String Data Type பயன்படுத்தி பெயர் (Name) சேமிக்கப்படுகிறது.",
    "வரி 7: double Data Type பயன்படுத்தி CGPA சேமிக்கப்படுகிறது.",
    "வரி 8: char Data Type பயன்படுத்தி Grade சேமிக்கப்படுகிறது.",
    "வரி 9: boolean Data Type பயன்படுத்தி Placement Status சேமிக்கப்படுகிறது.",
    "வரி 10: String Data Type பயன்படுத்தி Career Aim சேமிக்கப்படுகிறது.",
    "வரி 12–17: அனைத்து மதிப்புகளும் Console-ல் அச்சிடப்படுகின்றன."
  ],

  output: `Name : Deepak
Age : 20
CGPA : 8.9
Grade : A
Placed : false
Aim : Front-End Developer`,

  locked: true,

  completed: false
},
  {
    id: 4,
    title: "Input & Output",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 5,
    title: "Operators",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 6,
    title: "If Statement",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 7,
    title: "If Else",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 8,
    title: "Nested If",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 9,
    title: "Switch Case",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 10,
    title: "Ternary Operator",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 11,
    title: "While Loop",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 12,
    title: "Do While Loop",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 13,
    title: "For Loop",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 14,
    title: "Nested Loops",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 15,
    title: "Break Statement",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 16,
    title: "Continue Statement",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 17,
    title: "One Dimensional Array",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 18,
    title: "Two Dimensional Array",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 19,
    title: "Array Operations",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 20,
    title: "Methods",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 21,
    title: "Parameters",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 22,
    title: "Return Type",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 23,
    title: "Method Overloading",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 24,
    title: "Class",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 25,
    title: "Object",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 26,
    title: "Constructor",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 27,
    title: "this Keyword",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 28,
    title: "Inheritance",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 29,
    title: "Exception Handling",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 30,
    title: "Try Catch",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 31,
    title: "Finally",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 32,
    title: "Throw",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
];

export default topics;