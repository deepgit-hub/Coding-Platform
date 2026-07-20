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
  realWorldUsageTamil:
    "Developers Programming-ஐ பயன்படுத்தி Website, Mobile Application, Banking Software, Hospital Management System, E-Commerce Website, Game போன்ற பல்வேறு Software Application-களை உருவாக்குகின்றனர்.",
  
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
  realWorldUsageTamil:
"Software உருவாக்கும் போது Developers, பயனரின் பெயர் (Username), வயது (Age), வங்கி இருப்பு (Account Balance), பொருளின் விலை (Product Price), மதிப்பெண்கள் (Marks), Login நிலை (Login Status) போன்ற பல்வேறு தகவல்களை சேமிக்க Variables-ஐ பயன்படுத்துகின்றனர்.",
  
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
  
realWorldUsageTamil:
"Developers வயது (Age), மதிப்பெண்கள் (Marks), பெயர் (Name), சம்பளம் (Salary), Grade, Login Status போன்ற வெவ்வேறு வகையான தகவல்களை சரியான முறையில் சேமிக்க Data Types-ஐ பயன்படுத்துகின்றனர்.",
  

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
Aim : Cyber-Security`,

  locked: true,

  completed: false
},
  {
  id: 4,

  title: "Input & Output",

  englishDefinition:
    "Input is the data given to a program by the user, and Output is the result produced by the program. Java uses the Scanner class to receive input from the user and System.out.println() to display output.",

  tamilDefinition:
    "Input என்பது பயனர் (User) Program-க்கு வழங்கும் தகவலாகும். Output என்பது Program செயல்பட்ட பிறகு திரையில் காட்டப்படும் முடிவாகும். Java-வில் Scanner Class பயன்படுத்தி Input பெறப்படுகிறது மற்றும் System.out.println() மூலம் Output காட்டப்படுகிறது.",

  realWorldUsage:
    "Developers use input to receive information such as usernames, passwords, marks, and customer details. Output is used to display messages, results, reports, and other information to users.",
  realWorldUsageTamil:
"Developers பயனரிடமிருந்து Username, Password, Mobile Number, Marks, Payment Details போன்ற தகவல்களை Input ஆகப் பெறுகின்றனர். பின்னர் Login Result, Mark, Receipt, Error Message, Report போன்ற தகவல்களை Output ஆக திரையில் காட்டுகின்றனர்.",
  
  syntax: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);

int age = sc.nextInt();

System.out.println(age);`,

  syntaxExplanationEnglish: [
    "import java.util.Scanner; → Imports the Scanner class.",
    "Scanner sc = new Scanner(System.in); → Creates a Scanner object to receive input.",
    "sc.nextInt(); → Reads an integer value entered by the user.",
    "System.out.println(); → Displays output on the console."
  ],

  syntaxExplanationTamil: [
    "import java.util.Scanner; → Scanner Class-ஐ Program-க்கு கொண்டு வருகிறது.",
    "Scanner sc = new Scanner(System.in); → User-இடமிருந்து Input பெற Scanner Object உருவாக்கப்படுகிறது.",
    "sc.nextInt(); → User கொடுக்கும் Integer மதிப்பை பெறுகிறது.",
    "System.out.println(); → Output-ஐ Console-ல் காட்டுகிறது."
  ],

  exampleProgram: `import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Your Name : ");
        String name = sc.nextLine();

        System.out.print("Enter Your Age : ");
        int age = sc.nextInt();

        sc.nextLine();

        System.out.print("Enter Your Aim : ");
        String aim = sc.nextLine();

        System.out.println("\\n----- Student Details -----");
        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
        System.out.println("Aim : " + aim);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Imports the Scanner class.",
    "Line 5: Program execution starts from the main() method.",
    "Line 7: Creates a Scanner object to receive input.",
    "Line 9: Asks the user to enter their name.",
    "Line 10: Reads the name entered by the user.",
    "Line 12: Asks the user to enter their age.",
    "Line 13: Reads the age as an integer.",
    "Line 15: Consumes the leftover newline character after nextInt().",
    "Line 17: Asks the user to enter their career aim.",
    "Line 18: Reads the aim entered by the user.",
    "Lines 20-23: Displays all the entered details on the console."
  ],

  programExplanationTamil: [
    "வரி 1: Scanner Class Program-க்கு Import செய்யப்படுகிறது.",
    "வரி 5: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 7: User-இடமிருந்து Input பெற Scanner Object உருவாக்கப்படுகிறது.",
    "வரி 9: பயனரிடம் பெயர் கேட்கப்படுகிறது.",
    "வரி 10: பயனர் உள்ளிடும் பெயர் பெறப்படுகிறது.",
    "வரி 12: பயனரிடம் வயது கேட்கப்படுகிறது.",
    "வரி 13: வயது Integer ஆக பெறப்படுகிறது.",
    "வரி 15: nextInt() பிறகு இருக்கும் New Line Character நீக்கப்படுகிறது.",
    "வரி 17: பயனரிடம் Career Aim கேட்கப்படுகிறது.",
    "வரி 18: பயனர் உள்ளிடும் Aim பெறப்படுகிறது.",
    "வரி 20-23: அனைத்து தகவல்களும் Console-ல் காட்டப்படுகின்றன."
  ],

  output: `Enter Your Name : Deepak
Enter Your Age : 20
Enter Your Aim : Cyber Security

----- Student Details -----
Name : Deepak
Age : 20
Aim : Cyber Security`,

  locked: true,

  completed: false
},
 {
  id: 5,

  title: "Operators",

  englishDefinition:
    "Operators are special symbols used to perform operations on variables and values. Java provides different types of operators such as arithmetic, relational, logical, assignment, increment/decrement, and more.",

  tamilDefinition:
    "Operators என்பது Variables மற்றும் Values மீது பல்வேறு செயல்பாடுகளை (Operations) செய்ய பயன்படும் சிறப்பு குறியீடுகள் (Special Symbols) ஆகும். Java-வில் Arithmetic, Relational, Logical, Assignment, Increment/Decrement போன்ற பல வகையான Operators உள்ளன.",

  realWorldUsage:
    "Developers use operators to perform calculations, compare values, make decisions, validate conditions, update variables, and build application logic in software development.",
  realWorldUsageTamil:
"Developers கணக்கீடுகள் (Calculations), இரண்டு மதிப்புகளை ஒப்பிடுதல் (Comparison), முடிவெடுத்தல் (Decision Making), Condition-களை சரிபார்த்தல் மற்றும் Application Logic உருவாக்குதல் போன்ற பணிகளில் Operators-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `variable operator value;

// Examples
int sum = 10 + 5;
int difference = 10 - 5;
int product = 10 * 5;
int quotient = 10 / 5;
int remainder = 10 % 3;`,

  syntaxExplanationEnglish: [
    "variable → Stores the result of the operation.",
    "operator → Performs a specific operation such as addition, subtraction, multiplication, or comparison.",
    "value → The operands on which the operator performs the operation.",
    "Different operators perform different tasks in a program."
  ],

  syntaxExplanationTamil: [
    "variable → Operation-ன் முடிவை சேமிக்கிறது.",
    "operator → கூட்டல், கழித்தல், பெருக்கல், ஒப்பிடுதல் போன்ற செயல்களை செய்கிறது.",
    "value → Operator செயல்படும் மதிப்புகள் (Operands).",
    "ஒவ்வொரு Operator-மும் ஒரு குறிப்பிட்ட செயல்பாட்டைச் செய்கிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String name = "Deepak";
        int age = 20;

        int a = 15;
        int b = 5;

        System.out.println("Name : " + name);
        System.out.println("Age : " + age);

        System.out.println("\\nArithmetic Operators");
        System.out.println("Addition : " + (a + b));
        System.out.println("Subtraction : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division : " + (a / b));
        System.out.println("Modulus : " + (a % b));

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the program.",
    "Line 5: Stores the name 'Deepak' in a String variable.",
    "Line 6: Stores the age 20 in an integer variable.",
    "Lines 8-9: Declares two integer variables for performing operations.",
    "Lines 11-12: Displays the student's name and age.",
    "Line 14: Prints the heading 'Arithmetic Operators'.",
    "Lines 15-19: Performs addition, subtraction, multiplication, division, and modulus operations and displays the results."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: 'Deepak' என்ற பெயர் String Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 6: 20 என்ற வயது Integer Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 8-9: கணித செயல்பாடுகளுக்காக இரண்டு Integer Variables உருவாக்கப்படுகின்றன.",
    "வரி 11-12: மாணவரின் பெயர் மற்றும் வயது திரையில் காட்டப்படுகின்றன.",
    "வரி 14: 'Arithmetic Operators' என்ற தலைப்பு காட்டப்படுகிறது.",
    "வரி 15-19: கூட்டல், கழித்தல், பெருக்கல், வகுத்தல் மற்றும் மீதி (Modulus) கணக்கிடப்பட்டு Console-ல் காட்டப்படுகிறது."
  ],

  output: `Name : Deepak
Age : 20

Arithmetic Operators
Addition : 20
Subtraction : 10
Multiplication : 75
Division : 3
Modulus : 0`,

  locked: true,

  completed: false
},
    {
  id: 6,

  title: "If Statement",

  englishDefinition:
    "An if statement is a decision-making statement used to execute a block of code only when a specified condition is true. If the condition is false, the code inside the if block is skipped.",

  tamilDefinition:
    "If Statement என்பது ஒரு முடிவு எடுக்கும் (Decision Making) Statement ஆகும். கொடுக்கப்பட்ட Condition உண்மையாக (True) இருந்தால் மட்டுமே அதன் உள்ளே உள்ள Code இயங்கும். Condition False ஆக இருந்தால் அந்த Code இயக்கப்படாது.",

  realWorldUsage:
    "Developers use if statements to make decisions such as checking login credentials, verifying marks, validating payments, checking account balance, and controlling access to different features in an application.",
  realWorldUsageTamil:
 "Developers Login வெற்றிகரமாக உள்ளதா என்பதை சரிபார்க்க, மாணவர் தேர்ச்சி பெற்றாரா என்பதை கண்டறிய, Bank Account-ல் போதுமான இருப்பு உள்ளதா என்பதை சரிபார்க்க, Payment வெற்றிகரமாக முடிந்ததா என்பதை உறுதிப்படுத்த மற்றும் குறிப்பிட்ட நிபந்தனை (Condition) உண்மையாக இருந்தால் மட்டும் ஒரு செயல்பாட்டை செய்ய If Statement-ஐ பயன்படுத்துகின்றனர்.",    
  syntax: `if(condition){

    // Code to be executed

}`,

  syntaxExplanationEnglish: [
    "if → The keyword used to start the decision-making statement.",
    "condition → A boolean expression that evaluates to either true or false.",
    "If the condition is true, the code inside the curly braces executes.",
    "If the condition is false, the code inside the if block is skipped.",
    "Curly braces { } define the block of code that belongs to the if statement."
  ],

  syntaxExplanationTamil: [
    "if → முடிவு எடுக்கும் Statement-ஐ தொடங்க பயன்படும் Keyword.",
    "condition → True அல்லது False ஆக இருக்கும் ஒரு Boolean Expression.",
    "Condition True ஆக இருந்தால் Curly Braces-க்குள் இருக்கும் Code இயங்கும்.",
    "Condition False ஆக இருந்தால் அந்த Code இயக்கப்படாது.",
    "{ } Curly Braces என்பது if Statement-க்கு சொந்தமான Code Block-ஐ குறிக்கிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String name = "Deepak";
        int age = 20;
        String aim = "Cyber Security";

        if(age >= 18){

            System.out.println("Name : " + name);
            System.out.println("Age : " + age);
            System.out.println("Aim : " + aim);
            System.out.println("You are eligible to vote.");

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is where the program starts execution.",
    "Lines 5-7: Stores the student's name, age, and career aim in variables.",
    "Line 9: Checks whether the age is greater than or equal to 18.",
    "Since the condition is true (20 >= 18), the if block executes.",
    "Lines 11-14: Displays the student's details and the eligibility message.",
    "If the age had been less than 18, none of these statements would have been executed."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5-7: மாணவரின் பெயர், வயது மற்றும் Career Aim ஆகியவை Variable-களில் சேமிக்கப்படுகின்றன.",
    "வரி 9: வயது 18 அல்லது அதற்கு மேல் உள்ளதா என்று Condition சரிபார்க்கப்படுகிறது.",
    "20 >= 18 என்பது True என்பதால் if Block இயங்குகிறது.",
    "வரி 11-14: மாணவரின் விவரங்களும் 'You are eligible to vote.' என்ற செய்தியும் Console-ல் காட்டப்படுகின்றன.",
    "வயது 18-க்கு குறைவாக இருந்தால் if Block-க்குள் உள்ள எந்த Code-மும் இயக்கப்படாது."
  ],

  output: `Name : Deepak
Age : 20
Aim : Cyber Security
You are eligible to vote.`,

  locked: true,

  completed: false
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