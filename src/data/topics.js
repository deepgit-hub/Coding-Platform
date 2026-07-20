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

        String studentName = "Deepak";
        double attendance = 86;

        System.out.println("Student Name : " + studentName);
        System.out.println("Attendance : " + attendance + "%");

        if(attendance >= 75){

            System.out.println("Eligible for Semester Examination");

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: Stores the student's name in a String variable.",
    "Line 6: Stores the attendance percentage in a double variable.",
    "Lines 8-9: Displays the student's name and attendance.",
    "Line 11: Checks whether the attendance is greater than or equal to 75.",
    "Since 86 is greater than 75, the condition becomes true.",
    "Line 13: Prints 'Eligible for Semester Examination'.",
    "If the attendance had been less than 75, this message would not have been displayed."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: மாணவரின் பெயர் String Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 6: மாணவரின் Attendance Percentage double Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 8-9: மாணவரின் பெயர் மற்றும் Attendance திரையில் காட்டப்படுகிறது.",
    "வரி 11: Attendance 75 அல்லது அதற்கு மேல் உள்ளதா என்று Condition சரிபார்க்கப்படுகிறது.",
    "86 என்பது 75-ஐ விட அதிகமாக இருப்பதால் Condition True ஆகிறது.",
    "வரி 13: 'Eligible for Semester Examination' என்ற செய்தி Console-ல் காட்டப்படுகிறது.",
    "Attendance 75-க்கு குறைவாக இருந்தால் இந்த Message காட்டப்படாது."
  ],

  output: `Student Name : Deepak
Attendance : 86.0%
Eligible for Semester Examination`,

  locked: true,

  completed: false
},

  {
  id: 7,

  title: "If Else Statement",

  englishDefinition:
    "An if else statement is a decision-making statement used to execute one block of code when the condition is true and another block of code when the condition is false.",

  tamilDefinition:
    "If Else Statement என்பது ஒரு முடிவு எடுக்கும் (Decision Making) Statement ஆகும். கொடுக்கப்பட்ட Condition True ஆக இருந்தால் if Block இயங்கும். இல்லையெனில் (False) else Block இயங்கும்.",

  realWorldUsage:
    "Developers use if else statements to make decisions such as checking login credentials, determining pass or fail, verifying payment status, checking product availability, and controlling user access in applications.",

  realWorldUsageTamil:
    "Developers Login வெற்றிகரமாக உள்ளதா என்பதை சரிபார்க்க, மாணவர் தேர்ச்சி பெற்றாரா என்பதை கண்டறிய, Payment வெற்றிகரமாக முடிந்ததா என்பதை உறுதிப்படுத்த, Product இருப்பில் உள்ளதா என்பதை சரிபார்க்க மற்றும் பயனருக்கு அனுமதி வழங்க வேண்டுமா என்பதை முடிவு செய்ய If Else Statement-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `if(condition){

    // Executes if the condition is true

}
else{

    // Executes if the condition is false

}`,

  syntaxExplanationEnglish: [
    "if → Executes the code when the condition is true.",
    "condition → A boolean expression that evaluates to true or false.",
    "else → Executes when the condition is false.",
    "Only one block (if or else) will execute.",
    "Curly braces { } define the code block."
  ],

  syntaxExplanationTamil: [
    "if → Condition True ஆக இருந்தால் இந்த Block இயங்கும்.",
    "condition → True அல்லது False ஆக இருக்கும் Boolean Expression.",
    "else → Condition False ஆக இருந்தால் இந்த Block இயங்கும்.",
    "if அல்லது else ஆகியவற்றில் ஒரு Block மட்டுமே இயங்கும்.",
    "{ } Curly Braces Code Block-ஐ குறிக்கிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";
        double attendance = 68;

        System.out.println("Student Name : " + studentName);
        System.out.println("Attendance : " + attendance + "%");

        if(attendance >= 75){

            System.out.println("Eligible for Semester Examination");

        }
        else{

            System.out.println("Not Eligible for Semester Examination");

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: Stores the student's name.",
    "Line 6: Stores the attendance percentage.",
    "Lines 8-9: Displays the student's details.",
    "Line 11: Checks whether the attendance is greater than or equal to 75.",
    "If the condition is true, the if block executes.",
    "If the condition is false, the else block executes.",
    "Since the attendance is 68, the else block executes and displays 'Not Eligible for Semester Examination'."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: மாணவரின் பெயர் சேமிக்கப்படுகிறது.",
    "வரி 6: Attendance Percentage சேமிக்கப்படுகிறது.",
    "வரி 8-9: மாணவரின் தகவல்கள் Console-ல் காட்டப்படுகின்றன.",
    "வரி 11: Attendance 75 அல்லது அதற்கு மேல் உள்ளதா என்று Condition சரிபார்க்கப்படுகிறது.",
    "Condition True ஆக இருந்தால் if Block இயங்கும்.",
    "Condition False ஆக இருந்தால் else Block இயங்கும்.",
    "68 என்பது 75-ஐ விட குறைவாக இருப்பதால் else Block இயங்கி 'Not Eligible for Semester Examination' என்ற செய்தி காட்டப்படுகிறது."
  ],

  output: `Student Name : Deepak
Attendance : 18.0%

Not Eligible for Semester Examination`,

  locked: true,

  completed: false
},
  {
  id: 8,

  title: "Nested If Statement",

  englishDefinition:
    "A Nested If Statement is an if statement placed inside another if statement. It is used when a decision depends on another decision.",

  tamilDefinition:
    "Nested If Statement என்பது ஒரு if Statement-க்குள் மற்றொரு if Statement இருப்பதாகும். ஒரு முடிவு மற்றொரு முடிவை சார்ந்திருக்கும்போது Nested If பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Developers use Nested If statements when multiple conditions need to be checked in sequence, such as student result processing, ATM transactions, user authentication with role verification, and order processing systems.",

  realWorldUsageTamil:
    "Developers மாணவர்களின் முடிவுகளை (Results) கணக்கிட, ATM Transaction-களை சரிபார்க்க, User Login மற்றும் Role Verification செய்ய, Online Order Processing போன்ற பல நிலை (Multiple Level) முடிவுகளை எடுக்க Nested If Statement-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `if(condition1){

    if(condition2){

        // Code

    }

}`,

  syntaxExplanationEnglish: [
    "The outer if statement checks the first condition.",
    "The inner if statement executes only if the outer condition is true.",
    "Nested If is useful when one decision depends on another decision.",
    "The inner if statement will never execute if the outer condition is false."
  ],

  syntaxExplanationTamil: [
    "வெளிப்புற if Statement முதலில் Condition-ஐ சரிபார்க்கிறது.",
    "Outer Condition True ஆக இருந்தால் மட்டுமே Inner If Statement இயங்கும்.",
    "ஒரு முடிவு மற்றொரு முடிவை சார்ந்திருந்தால் Nested If பயன்படுத்தப்படுகிறது.",
    "Outer Condition False ஆக இருந்தால் Inner If ஒருபோதும் இயக்கப்படாது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";
        double attendance = 86;
        int marks = 91;

        System.out.println("Student Name : " + studentName);
        System.out.println("Attendance : " + attendance + "%");
        System.out.println("Marks : " + marks);

        if(attendance >= 75){

            System.out.println("Eligible for Semester Examination");

            if(marks >= 90){

                System.out.println("Result : Distinction");

            }

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: Program execution starts from the main() method.",
    "Lines 5-7: Stores the student's details.",
    "Lines 9-11: Displays the student's information.",
    "Line 13: Checks whether the attendance is at least 75%.",
    "Since the attendance is 86%, the outer if statement executes.",
    "Line 17: The inner if statement checks whether the marks are 90 or above.",
    "Since the marks are 91, the inner if statement also executes.",
    "Line 19: Displays 'Result : Distinction'.",
    "If the attendance had been below 75%, the inner if statement would never have been checked."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5-7: மாணவரின் தகவல்கள் Variable-களில் சேமிக்கப்படுகின்றன.",
    "வரி 9-11: மாணவரின் விவரங்கள் Console-ல் காட்டப்படுகின்றன.",
    "வரி 13: Attendance 75% அல்லது அதற்கு மேல் உள்ளதா என்று சரிபார்க்கப்படுகிறது.",
    "86% இருப்பதால் Outer If Statement இயங்குகிறது.",
    "வரி 17: Marks 90 அல்லது அதற்கு மேல் உள்ளதா என்று Inner If Statement சரிபார்க்கிறது.",
    "91 Marks இருப்பதால் Inner If Statement-மும் இயங்குகிறது.",
    "வரி 19: 'Result : Distinction' என்ற செய்தி Console-ல் காட்டப்படுகிறது.",
    "Attendance 75%-க்கு குறைவாக இருந்தால் Inner If Statement ஒருபோதும் இயக்கப்படாது."
  ],

  output: `Student Name : Deepak
Attendance : 86.0%
Marks : 91
Eligible for Semester Examination
Result : Distinction`,

  locked: true,

  completed: false
},
 {
  id: 9,

  title: "Switch Case",

  englishDefinition:
    "A Switch Case statement is a decision-making statement used to execute one block of code from multiple options based on the value of an expression. It is a better alternative to multiple if else statements when checking a single variable against different values.",

  tamilDefinition:
    "Switch Case என்பது ஒரு முடிவு எடுக்கும் (Decision Making) Statement ஆகும். ஒரு Variable-ன் மதிப்பை (Value) அடிப்படையாகக் கொண்டு பல்வேறு விருப்பங்களில் (Options) ஒன்றைத் தேர்வு செய்து அதற்கான Code-ஐ இயக்க பயன்படுகிறது. ஒரே Variable-ஐ பல மதிப்புகளுடன் ஒப்பிட வேண்டிய சூழலில் பல if else Statement-களுக்கு பதிலாக Switch Case பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Developers use Switch Case to implement menu-driven programs, language selection, department selection, payment methods, user roles, and navigation systems where one value determines one action.",

  realWorldUsageTamil:
    "Developers Menu Driven Program, மொழி தேர்வு (Language Selection), Department Selection, Payment Method, User Role மற்றும் Navigation System போன்றவற்றில் ஒரு குறிப்பிட்ட Value-க்கு ஏற்ப சரியான செயல்பாட்டை செய்ய Switch Case-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `switch(expression){

    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Code

}`,

  syntaxExplanationEnglish: [
    "switch → Starts the Switch Case statement.",
    "expression → The value that will be checked.",
    "case → Represents a possible value of the expression.",
    "break → Terminates the current case and exits the switch statement.",
    "default → Executes when none of the cases match."
  ],

  syntaxExplanationTamil: [
    "switch → Switch Case Statement-ஐ தொடங்குகிறது.",
    "expression → எந்த Value சரிபார்க்கப்பட வேண்டும் என்பதை குறிப்பிடுகிறது.",
    "case → சாத்தியமான ஒரு மதிப்பை (Possible Value) குறிக்கிறது.",
    "break → தற்போதைய Case-ஐ முடித்து Switch Statement-இல் இருந்து வெளியேறுகிறது.",
    "default → எந்த Case-மும் பொருந்தவில்லை என்றால் இந்த Block இயங்கும்."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";
        int department = 4;

        System.out.println("Student Name : " + studentName);

        switch(department){

            case 1:
                System.out.println("Department : Computer Science Engineering");
                break;

            case 2:
                System.out.println("Department : Information Technology");
                break;

            case 3:
                System.out.println("Department : Artificial Intelligence and Machine Learning");
                break;

            case 4:
                System.out.println("Department : Cyber Security");
                break;

            default:
                System.out.println("Invalid Department");

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: Stores the student's name.",
    "Line 6: Stores the department number.",
    "Line 8: Displays the student's name.",
    "Line 10: The switch statement checks the value of the department variable.",
    "Case 1 displays 'Computer Science Engineering'.",
    "Case 2 displays 'Information Technology'.",
    "Case 3 displays 'Artificial Intelligence and Machine Learning'.",
    "Case 4 displays 'Cyber Security'.",
    "Since the department value is 4, Case 4 executes.",
    "The break statement stops the execution of the switch statement.",
    "The default block executes only when none of the cases match."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: மாணவரின் பெயர் Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 6: Department Number Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 8: மாணவரின் பெயர் Console-ல் காட்டப்படுகிறது.",
    "வரி 10: Department Variable-ன் Value Switch Statement மூலம் சரிபார்க்கப்படுகிறது.",
    "Case 1 இயங்கினால் 'Computer Science Engineering' காட்டப்படும்.",
    "Case 2 இயங்கினால் 'Information Technology' காட்டப்படும்.",
    "Case 3 இயங்கினால் 'Artificial Intelligence and Machine Learning' காட்டப்படும்.",
    "Case 4 இயங்கினால் 'Cyber Security' காட்டப்படும்.",
    "Department Value 4 என்பதால் Case 4 மட்டும் இயங்குகிறது.",
    "break Statement தற்போதைய Case-ஐ முடித்து Switch Statement-இல் இருந்து வெளியேறுகிறது.",
    "எந்த Case-மும் பொருந்தவில்லை என்றால் மட்டும் default Block இயங்கும்."
  ],

  output: `Student Name : Deepak
Department : Cyber Security

💡 Note 
Switch Case is the best choice when a single variable has multiple possible values. It makes the code cleaner and easier to understand than writing many if else statements.

💡 குறிப்பு 
ஒரே Variable-க்கு பல்வேறு Values இருந்தால் Switch Case பயன்படுத்துவது சிறந்தது. இது பல if else Statement-களை எழுதுவதை விட Code-ஐ சுத்தமாகவும் புரிந்துகொள்ள எளிதாகவும் மாற்றுகிறது.`,

  locked: true,

  completed: false
},
  {
  id: 10,

  title: "Ternary Operator",

  englishDefinition:
    "The Ternary Operator is a shorthand version of the if else statement. It evaluates a condition and returns one value if the condition is true and another value if the condition is false.",

  tamilDefinition:
    "Ternary Operator என்பது If Else Statement-ன் சுருக்கமான (Short Form) வடிவமாகும். இது ஒரு Condition-ஐ சரிபார்த்து, அது True ஆக இருந்தால் ஒரு மதிப்பையும், False ஆக இருந்தால் மற்றொரு மதிப்பையும் வழங்குகிறது.",

  realWorldUsage:
    "Developers use the Ternary Operator to write simple decision-making logic in a shorter and cleaner way. It is commonly used for displaying status messages, assigning values, and updating the user interface.",

  realWorldUsageTamil:
    "Developers சிறிய முடிவுகளை (Simple Decisions) எடுக்க Ternary Operator-ஐ பயன்படுத்துகின்றனர். Status Message காட்டுதல், Value Assign செய்தல் மற்றும் User Interface-ல் தகவல்களை சுருக்கமாக எழுதுவதற்கு இது அதிகமாக பயன்படுத்தப்படுகிறது.",

  syntax: `variable = (condition) ? valueIfTrue : valueIfFalse;`,

  syntaxExplanationEnglish: [
    "condition → The condition to be checked.",
    "? → Executes the value before ':' when the condition is true.",
    ": → Separates the true and false values.",
    "valueIfTrue → Returned if the condition is true.",
    "valueIfFalse → Returned if the condition is false.",
    "The Ternary Operator is suitable for simple if else conditions."
  ],

  syntaxExplanationTamil: [
    "condition → சரிபார்க்க வேண்டிய Condition.",
    "? → Condition True ஆக இருந்தால் ':'-க்கு முன் உள்ள Value தேர்வு செய்யப்படும்.",
    ": → True மற்றும் False Value-களை பிரிக்கிறது.",
    "valueIfTrue → Condition True ஆக இருந்தால் இந்த Value கிடைக்கும்.",
    "valueIfFalse → Condition False ஆக இருந்தால் இந்த Value கிடைக்கும்.",
    "சிறிய If Else Logic-களுக்கு Ternary Operator பயன்படுத்தப்படுகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";
        double attendance = 86;

        System.out.println("Student Name : " + studentName);
        System.out.println("Attendance : " + attendance + "%");

        String result = (attendance >= 75)
                ? "Eligible for Semester Examination"
                : "Not Eligible for Semester Examination";

        System.out.println(result);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Lines 5-6: Stores the student's name and attendance.",
    "Lines 8-9: Displays the student's details.",
    "Lines 11-13: The Ternary Operator checks whether the attendance is at least 75%.",
    "If the condition is true, 'Eligible for Semester Examination' is assigned to the result variable.",
    "If the condition is false, 'Not Eligible for Semester Examination' is assigned.",
    "Line 15: Displays the final result."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5-6: மாணவரின் பெயர் மற்றும் Attendance Variable-களில் சேமிக்கப்படுகின்றன.",
    "வரி 8-9: மாணவரின் தகவல்கள் Console-ல் காட்டப்படுகின்றன.",
    "வரி 11-13: Attendance 75 அல்லது அதற்கு மேல் உள்ளதா என்று Ternary Operator மூலம் சரிபார்க்கப்படுகிறது.",
    "Condition True ஆக இருந்தால் 'Eligible for Semester Examination' என்ற Value result Variable-ல் சேமிக்கப்படுகிறது.",
    "Condition False ஆக இருந்தால் 'Not Eligible for Semester Examination' என்ற Value சேமிக்கப்படுகிறது.",
    "வரி 15: இறுதி முடிவு Console-ல் காட்டப்படுகிறது."
  ],

  output: `Student Name : Deepak
Attendance : 86.0%

Eligible for Semester Examination

💡 Note
Use the Ternary Operator only for simple if else conditions. If the logic becomes complex, using an if else statement makes the code easier to read and maintain.

💡 குறிப்பு
சிறிய If Else Condition-களுக்கு மட்டும் Ternary Operator-ஐ பயன்படுத்துங்கள். Logic சிக்கலாக (Complex) இருந்தால் If Else Statement பயன்படுத்துவது Code-ஐ படிக்கவும் பராமரிக்கவும் (Maintain) எளிதாக இருக்கும்.`,

  locked: true,

  completed: false
},
 {
  id: 11,

  title: "While Loop",

  englishDefinition:
    "A While Loop is used to repeatedly execute a block of code as long as the given condition is true. The loop stops automatically when the condition becomes false.",

  tamilDefinition:
    "While Loop என்பது கொடுக்கப்பட்ட Condition True ஆக இருக்கும் வரை ஒரே Code Block-ஐ மீண்டும் மீண்டும் இயக்க பயன்படுகிறது. Condition False ஆனவுடன் Loop தானாக நிறுத்தப்படுகிறது.",

  realWorldUsage:
    "Developers use While Loops when the number of repetitions is unknown, such as reading user input, processing files, monitoring sensors, waiting for user actions, and repeatedly checking system conditions.",

  realWorldUsageTamil:
    "Developers எத்தனை முறை ஒரு செயலை செய்ய வேண்டும் என்பது முன்கூட்டியே தெரியாத சூழலில் While Loop-ஐ பயன்படுத்துகின்றனர். உதாரணமாக User Input பெறுதல், File Processing, Sensor Monitoring, User Action-ஐ காத்திருத்தல் மற்றும் System Condition-களை மீண்டும் மீண்டும் சரிபார்த்தல் போன்றவற்றில் இது பயன்படுத்தப்படுகிறது.",

  syntax: `while(condition){

    // Code to be executed

}`,

  syntaxExplanationEnglish: [
    "while → Starts the loop.",
    "condition → Checked before every iteration.",
    "If the condition is true, the code inside the loop executes.",
    "If the condition becomes false, the loop stops.",
    "The loop variable should be updated inside the loop to avoid an infinite loop."
  ],

  syntaxExplanationTamil: [
    "while → Loop-ஐ தொடங்குகிறது.",
    "condition → ஒவ்வொரு முறையும் Loop இயங்கும் முன் சரிபார்க்கப்படுகிறது.",
    "Condition True ஆக இருந்தால் Loop-க்குள் இருக்கும் Code இயங்கும்.",
    "Condition False ஆனவுடன் Loop நிறுத்தப்படுகிறது.",
    "Infinite Loop வராமல் இருக்க Loop Variable-ஐ Loop-க்குள் Update செய்ய வேண்டும்."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";
        int day = 1;

        System.out.println("Attendance Record for " + studentName);

        while(day <= 5){

            System.out.println("Day " + day + " : Present");

            day++;

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: Program execution starts from the main() method.",
    "Line 5: Stores the student's name.",
    "Line 6: Initializes the day variable with 1.",
    "Line 8: Displays the heading.",
    "Line 10: Checks whether day is less than or equal to 5.",
    "Line 12: Prints the attendance for the current day.",
    "Line 14: Increments the day by 1.",
    "The loop repeats until day becomes 6.",
    "When the condition becomes false, the loop stops."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: மாணவரின் பெயர் Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 6: day Variable-க்கு ஆரம்ப மதிப்பாக 1 கொடுக்கப்படுகிறது.",
    "வரி 8: தலைப்பு Console-ல் காட்டப்படுகிறது.",
    "வரி 10: day 5 அல்லது அதற்கு குறைவாக உள்ளதா என்று சரிபார்க்கப்படுகிறது.",
    "வரி 12: அந்த நாளின் Attendance Console-ல் காட்டப்படுகிறது.",
    "வரி 14: day Variable ஒரு மதிப்பு அதிகரிக்கப்படுகிறது.",
    "day 6 ஆனவுடன் Condition False ஆகி Loop நிறுத்தப்படுகிறது."
  ],

  output: `Attendance Record for Deepak
Day 1 : Present
Day 2 : Present
Day 3 : Present
Day 4 : Present
Day 5 : Present

💡 Note 
A While Loop is best used when the number of repetitions is not known in advance. Always update the loop variable to prevent an infinite loop.

💡 குறிப்பு 
எத்தனை முறை Loop இயங்கும் என்பது முன்கூட்டியே தெரியாத சூழலில் While Loop பயன்படுத்துவது சிறந்தது. Loop Variable-ஐ Update செய்ய மறந்தால் Infinite Loop ஏற்படும்.`,

  locked: true,

  completed: false
},
 {
  id: 12,

  title: "Do While Loop",

  englishDefinition:
    "A Do While Loop is used to execute a block of code at least once before checking the condition. After the first execution, the condition is checked. If it is true, the loop continues; otherwise, it stops.",

  tamilDefinition:
    "Do While Loop என்பது முதலில் ஒரு முறை Code-ஐ இயக்கி, அதன் பிறகு Condition-ஐ சரிபார்க்கும் Loop ஆகும். Condition True ஆக இருந்தால் Loop தொடர்ந்து இயங்கும். இல்லையெனில் Loop நிறுத்தப்படும்.",

  realWorldUsage:
    "Developers use Do While Loops in menu-driven applications, ATM systems, games, and software where the menu or screen should be displayed at least once before checking whether to continue.",

  realWorldUsageTamil:
    "Developers Menu Driven Application, ATM Machine, Games மற்றும் Software Menu போன்றவற்றில் Do While Loop-ஐ பயன்படுத்துகின்றனர். Menu குறைந்தபட்சம் ஒரு முறை காட்டப்பட வேண்டும் என்ற சூழலில் இது மிகவும் பயனுள்ளதாக இருக்கும்.",

  syntax: `do{

    // Code to be executed

}while(condition);`,

  syntaxExplanationEnglish: [
    "do → Starts the loop.",
    "The code inside the do block executes first.",
    "while(condition) → Checks the condition after executing the code.",
    "If the condition is true, the loop repeats.",
    "If the condition is false, the loop stops."
  ],

  syntaxExplanationTamil: [
    "do → Loop-ஐ தொடங்குகிறது.",
    "do Block-க்குள் உள்ள Code முதலில் ஒரு முறை இயங்கும்.",
    "while(condition) → Code இயங்கிய பிறகு Condition சரிபார்க்கப்படுகிறது.",
    "Condition True ஆக இருந்தால் Loop மீண்டும் இயங்கும்.",
    "Condition False ஆக இருந்தால் Loop நிறுத்தப்படுகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";
        int choice = 4;

        do{

            System.out.println("===== Student Portal =====");
            System.out.println("1. View Profile");
            System.out.println("2. View Attendance");
            System.out.println("3. View Marks");
            System.out.println("4. Exit");

            System.out.println("\\nStudent : " + studentName);
            System.out.println("Selected Option : " + choice);

            choice++;

        }while(choice <= 3);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is where the program starts.",
    "Line 5: Stores the student's name.",
    "Line 6: Initializes the choice variable with 4.",
    "Line 8: The do block starts executing.",
    "Lines 10-13: Displays the Student Portal menu.",
    "Lines 15-16: Displays the student's name and selected option.",
    "Line 18: Increments the choice variable.",
    "Line 20: Checks whether choice is less than or equal to 3.",
    "Since choice becomes 5, the condition is false, so the loop stops.",
    "Notice that the menu is displayed once even though the condition is false."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: மாணவரின் பெயர் Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 6: choice Variable-க்கு ஆரம்ப மதிப்பாக 4 கொடுக்கப்படுகிறது.",
    "வரி 8: do Block முதலில் ஒரு முறை இயங்குகிறது.",
    "வரி 10-13: Student Portal Menu Console-ல் காட்டப்படுகிறது.",
    "வரி 15-16: மாணவரின் பெயர் மற்றும் தேர்வு செய்யப்பட்ட Option காட்டப்படுகிறது.",
    "வரி 18: choice Variable ஒரு மதிப்பு அதிகரிக்கப்படுகிறது.",
    "வரி 20: choice <= 3 என்று சரிபார்க்கப்படுகிறது.",
    "choice 5 ஆக இருப்பதால் Condition False ஆகிறது.",
    "Condition False இருந்தாலும் do Block ஒரு முறை இயங்கியிருப்பதை கவனிக்கவும். இதுவே Do While Loop-ன் முக்கிய சிறப்பாகும்."
  ],

  output: `===== Student Portal =====
1. View Profile
2. View Attendance
3. View Marks
4. Exit

Student : Deepak
Selected Option : 4

💡 Note (English)
The Do While Loop always executes at least one time because the condition is checked after executing the code.

💡 குறிப்பு (Tamil)
Do While Loop-ல் Condition பின்னர் சரிபார்க்கப்படுவதால் Code குறைந்தபட்சம் ஒரு முறை கண்டிப்பாக இயங்கும்.`,

  locked: true,

  completed: false
},
  {
  id: 13,

  title: "For Loop",

  englishDefinition:
    "A For Loop is used to repeatedly execute a block of code for a specific number of times. It is commonly used when the number of iterations is known in advance.",

  tamilDefinition:
    "For Loop என்பது ஒரு குறிப்பிட்ட எண்ணிக்கையிலான (Fixed Number of Times) முறைகள் ஒரே Code Block-ஐ மீண்டும் மீண்டும் இயக்க பயன்படுகிறது. எத்தனை முறை Loop இயங்க வேண்டும் என்பது முன்கூட்டியே தெரிந்திருந்தால் For Loop பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Developers use For Loops to display student records, process marks, generate reports, display products, iterate through arrays, and perform repetitive tasks where the number of iterations is known.",

  realWorldUsageTamil:
    "Developers மாணவர்களின் தகவல்களை காட்டுதல், மதிப்பெண்களை செயலாக்குதல் (Process Marks), Reports உருவாக்குதல், Products-ஐ காட்டுதல், Arrays-ல் உள்ள தரவுகளை அணுகுதல் மற்றும் முன்கூட்டியே தெரிந்த எண்ணிக்கையிலான செயல்களை மீண்டும் மீண்டும் செய்ய For Loop-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `for(initialization; condition; increment/decrement){

    // Code to be executed

}`,

  syntaxExplanationEnglish: [
    "initialization → Executes only once before the loop starts.",
    "condition → Checked before every iteration.",
    "increment/decrement → Updates the loop variable after every iteration.",
    "The loop continues until the condition becomes false.",
    "For Loop is best when the number of iterations is known."
  ],

  syntaxExplanationTamil: [
    "initialization → Loop தொடங்கும் முன் ஒரு முறை மட்டும் இயங்கும்.",
    "condition → ஒவ்வொரு முறையும் Loop இயங்கும் முன் சரிபார்க்கப்படுகிறது.",
    "increment/decrement → ஒவ்வொரு Iteration-க்கும் பிறகு Loop Variable Update செய்யப்படுகிறது.",
    "Condition False ஆனவுடன் Loop நிறுத்தப்படுகிறது.",
    "எத்தனை முறை Loop இயங்க வேண்டும் என்பது தெரிந்திருந்தால் For Loop பயன்படுத்தப்படுகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        String studentName = "Deepak";

        System.out.println("Student : " + studentName);
        System.out.println("Subject Marks");

        for(int subject = 1; subject <= 5; subject++){

            System.out.println("Subject " + subject + " : Pass");

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: Stores the student's name.",
    "Lines 7-8: Displays the heading.",
    "Line 10: Initializes the subject variable with 1.",
    "The loop continues while subject is less than or equal to 5.",
    "After every iteration, subject is increased by 1.",
    "Line 12: Displays the result of each subject.",
    "When subject becomes 6, the condition becomes false and the loop stops."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: மாணவரின் பெயர் Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 7-8: தலைப்பு Console-ல் காட்டப்படுகிறது.",
    "வரி 10: subject Variable-க்கு ஆரம்ப மதிப்பாக 1 கொடுக்கப்படுகிறது.",
    "subject <= 5 இருக்கும் வரை Loop தொடர்ந்து இயங்குகிறது.",
    "ஒவ்வொரு முறையும் subject ஒரு மதிப்பு அதிகரிக்கப்படுகிறது.",
    "வரி 12: ஒவ்வொரு Subject-ன் Result Console-ல் காட்டப்படுகிறது.",
    "subject 6 ஆனவுடன் Condition False ஆகி Loop நிறுத்தப்படுகிறது."
  ],

  output: `Student : Deepak
Subject Marks
Subject 1 : Pass
Subject 2 : Pass
Subject 3 : Pass
Subject 4 : Pass
Subject 5 : Pass

💡 Note 
Use a For Loop when you already know how many times the loop should execute. It is commonly used with arrays, lists, and fixed-size data.

💡 குறிப்பு 
Loop எத்தனை முறை இயங்க வேண்டும் என்பது முன்கூட்டியே தெரிந்திருந்தால் For Loop பயன்படுத்துவது சிறந்தது. Arrays, Lists மற்றும் Fixed Size Data-களுடன் இது அதிகமாக பயன்படுத்தப்படுகிறது.`,

  locked: true,

  completed: false
},
 {
  id: 14,

  title: "Nested Loops",

  englishDefinition:
    "A Nested Loop is a loop inside another loop. The inner loop executes completely for every iteration of the outer loop.",

  tamilDefinition:
    "Nested Loop என்பது ஒரு Loop-க்குள் மற்றொரு Loop இருப்பதாகும். Outer Loop ஒரு முறை இயங்கும் ஒவ்வொரு முறையும் Inner Loop முழுமையாக இயங்கும்.",

  realWorldUsage:
    "Developers use Nested Loops to create patterns, process tables, work with matrices, generate reports, and handle two-dimensional arrays.",

  realWorldUsageTamil:
    "Developers Pattern Printing, Tables, Matrices, Report Generation மற்றும் Two-Dimensional Arrays போன்றவற்றை செயல்படுத்த Nested Loop-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `for(initialization; condition; increment){

    for(initialization; condition; increment){

        // Code

    }

}`,

  syntaxExplanationEnglish: [
    "The outer loop controls the number of rows.",
    "The inner loop controls the number of columns.",
    "The inner loop executes completely for every iteration of the outer loop.",
    "Nested Loops are commonly used for pattern printing and two-dimensional data."
  ],

  syntaxExplanationTamil: [
    "Outer Loop வரிசைகளின் (Rows) எண்ணிக்கையை கட்டுப்படுத்துகிறது.",
    "Inner Loop நெடுவரிசைகளின் (Columns) எண்ணிக்கையை கட்டுப்படுத்துகிறது.",
    "Outer Loop ஒவ்வொரு முறையும் இயங்கும்போது Inner Loop முழுமையாக இயங்குகிறது.",
    "Nested Loop Pattern Printing மற்றும் Two-Dimensional Data-களில் அதிகமாக பயன்படுத்தப்படுகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        for(int row = 1; row <= 5; row++){

            for(int column = 1; column <= row; column++){

                System.out.print("* ");

            }

            System.out.println();

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the program.",
    "Line 5: The outer loop controls the number of rows (1 to 5).",
    "Line 7: The inner loop prints stars for the current row.",
    "During the first row, one star is printed.",
    "During the second row, two stars are printed.",
    "This continues until the fifth row prints five stars.",
    "Line 11: Moves the cursor to the next line after completing each row."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: Outer Loop 1 முதல் 5 வரை உள்ள வரிசைகளை (Rows) கட்டுப்படுத்துகிறது.",
    "வரி 7: Inner Loop தற்போதைய Row-க்கு தேவையான நட்சத்திரங்களை (*) அச்சிடுகிறது.",
    "முதல் Row-ல் ஒரு * அச்சிடப்படுகிறது.",
    "இரண்டாவது Row-ல் இரண்டு * அச்சிடப்படுகின்றன.",
    "இதேபோல் ஐந்தாவது Row வரை ஒவ்வொரு Row-லும் ஒரு * அதிகரித்து அச்சிடப்படுகிறது.",
    "வரி 11: ஒவ்வொரு Row முடிந்த பிறகும் அடுத்த வரிக்கு செல்கிறது."
  ],

  output: `*
* *
* * *
* * * *
* * * * *

💡 Note 
Pattern Printing is one of the best applications of Nested Loops. The outer loop controls the rows, while the inner loop controls the columns or symbols printed in each row.

💡 குறிப்பு 
Pattern Printing என்பது Nested Loop-ன் மிகவும் பிரபலமான பயன்பாடுகளில் ஒன்றாகும். Outer Loop Rows-ஐ கட்டுப்படுத்துகிறது. Inner Loop ஒவ்வொரு Row-லும் அச்சிடப்படும் Symbols அல்லது Columns-ஐ கட்டுப்படுத்துகிறது.`,

  locked: true,

  completed: false
},
 {
  id: 15,

  title: "Break Statement",

  englishDefinition:
    "The Break Statement is used to immediately terminate a loop or switch statement. When the break statement is executed, the control exits the loop or switch and continues with the next statement after it.",

  tamilDefinition:
    "Break Statement என்பது Loop அல்லது Switch Statement-ஐ உடனடியாக நிறுத்த பயன்படுகிறது. Break Statement இயங்கியவுடன் Loop அல்லது Switch முடிவடைந்து, அதற்குப் பிறகு உள்ள Statement-இல் இருந்து Program தொடர்ந்து இயங்கும்.",

  realWorldUsage:
    "Developers use the Break Statement to stop searching once the required data is found, terminate loops after detecting an error, exit menu-driven programs, and improve program efficiency by avoiding unnecessary iterations.",

  realWorldUsageTamil:
    "Developers தேவையான தகவல் கிடைத்தவுடன் Search-ஐ நிறுத்த, Error கண்டறியப்பட்டவுடன் Loop-ஐ முடிக்க, Menu Program-களில் வெளியேற (Exit) மற்றும் தேவையில்லாத Iteration-களை தவிர்த்து Program-ன் செயல்திறனை (Performance) அதிகரிக்க Break Statement-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `for(initialization; condition; increment){

    if(condition){

        break;

    }

}`,

  syntaxExplanationEnglish: [
    "break → Immediately terminates the current loop or switch statement.",
    "When break executes, the remaining statements inside the loop are skipped.",
    "Program execution continues with the first statement after the loop.",
    "It is commonly used with if statements inside loops."
  ],

  syntaxExplanationTamil: [
    "break → தற்போதைய Loop அல்லது Switch Statement-ஐ உடனடியாக நிறுத்துகிறது.",
    "break இயங்கியவுடன் Loop-க்குள் இருக்கும் மீதமுள்ள Statements இயக்கப்படாது.",
    "Program Loop-க்கு அடுத்துள்ள Statement-இல் இருந்து தொடர்ந்து இயங்கும்.",
    "பொதுவாக Loop-க்குள் இருக்கும் If Statement உடன் Break பயன்படுத்தப்படுகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        for(int day = 1; day <= 5; day++){

            if(day == 4){

                System.out.println("Day " + day + " : Absent");
                break;

            }

            System.out.println("Day " + day + " : Present");

        }

        System.out.println("Attendance checking stopped.");

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: The for loop starts from Day 1 and continues until Day 5.",
    "Line 7: Checks whether the current day is Day 4.",
    "When Day becomes 4, 'Absent' is displayed.",
    "Line 10: The break statement immediately terminates the loop.",
    "Days after Day 4 are not processed.",
    "Line 17: Displays the message after the loop has ended."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: For Loop Day 1 முதல் Day 5 வரை இயங்குகிறது.",
    "வரி 7: தற்போதைய நாள் Day 4 ஆக உள்ளதா என்று சரிபார்க்கப்படுகிறது.",
    "Day 4 வந்தவுடன் 'Absent' என்ற செய்தி காட்டப்படுகிறது.",
    "வரி 10: Break Statement Loop-ஐ உடனடியாக நிறுத்துகிறது.",
    "Day 5 சரிபார்க்கப்படாது.",
    "வரி 17: Loop முடிந்த பிறகு இறுதி செய்தி Console-ல் காட்டப்படுகிறது."
  ],

  output: `Day 1 : Present
Day 2 : Present
Day 3 : Present
Day 4 : Absent
Attendance checking stopped.

💡 Note 
Use the Break Statement when you want to stop a loop immediately after a specific condition is met. This improves program performance by avoiding unnecessary iterations.

💡 குறிப்பு 
ஒரு குறிப்பிட்ட Condition நிறைவேறியவுடன் Loop-ஐ உடனடியாக நிறுத்த வேண்டுமெனில் Break Statement பயன்படுத்த வேண்டும். இது தேவையில்லாத Iteration-களை தவிர்த்து Program-ன் செயல்திறனை (Performance) அதிகரிக்க உதவுகிறது.`,

  locked: true,

  completed: false
},
 {
  id: 16,

  title: "Continue Statement",

  englishDefinition:
    "The Continue Statement is used to skip the current iteration of a loop and continue with the next iteration. It does not terminate the loop.",

  tamilDefinition:
    "Continue Statement என்பது Loop-ன் தற்போதைய Iteration-ஐ மட்டும் தவிர்த்து (Skip செய்து), அடுத்த Iteration-க்கு செல்ல பயன்படுகிறது. இது Loop-ஐ நிறுத்தாது.",

  realWorldUsage:
    "Developers use the Continue Statement to skip invalid data, ignore holidays while processing attendance, skip unavailable products, and continue processing the remaining records without terminating the loop.",

  realWorldUsageTamil:
    "Developers தவறான தரவுகளை (Invalid Data) தவிர்க்க, Attendance-ல் Holidays-ஐ Skip செய்ய, கிடைக்காத Products-ஐ புறக்கணிக்க மற்றும் மீதமுள்ள Records-ஐ தொடர்ந்து செயலாக்க Continue Statement-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `for(initialization; condition; increment){

    if(condition){

        continue;

    }

    // Remaining Statements

}`,

  syntaxExplanationEnglish: [
    "continue → Skips only the current iteration.",
    "The remaining statements inside the loop are not executed for that iteration.",
    "The loop immediately proceeds to the next iteration.",
    "Unlike break, continue does not terminate the loop."
  ],

  syntaxExplanationTamil: [
    "continue → தற்போதைய Iteration-ஐ மட்டும் Skip செய்கிறது.",
    "அந்த Iteration-ல் உள்ள மீதமுள்ள Statements இயக்கப்படாது.",
    "Loop உடனடியாக அடுத்த Iteration-க்கு செல்கிறது.",
    "break போல Loop-ஐ நிறுத்தாமல் தொடர்ந்து இயங்கச் செய்கிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        for(int day = 1; day <= 5; day++){

            if(day == 3){

                System.out.println("Day " + day + " : Holiday");
                continue;

            }

            System.out.println("Day " + day + " : Present");

        }

        System.out.println("Attendance checking completed.");

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: The for loop checks attendance from Day 1 to Day 5.",
    "Line 7: Checks whether the current day is Day 3.",
    "If it is Day 3, 'Holiday' is displayed.",
    "Line 10: The continue statement skips the remaining statements for Day 3.",
    "The loop then proceeds directly to Day 4.",
    "Days 4 and 5 are processed normally.",
    "Line 17: Displays the completion message after the loop ends."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: For Loop Day 1 முதல் Day 5 வரை Attendance-ஐ சரிபார்க்கிறது.",
    "வரி 7: தற்போதைய நாள் Day 3 ஆக உள்ளதா என்று சரிபார்க்கப்படுகிறது.",
    "Day 3 ஆக இருந்தால் 'Holiday' என்று காட்டப்படுகிறது.",
    "வரி 10: Continue Statement அந்த Iteration-ன் மீதமுள்ள Statements-ஐ Skip செய்கிறது.",
    "Loop நேரடியாக Day 4-க்கு செல்கிறது.",
    "Day 4 மற்றும் Day 5 வழக்கம்போல் செயல்படுத்தப்படுகின்றன.",
    "வரி 17: Loop முடிந்த பிறகு இறுதி செய்தி காட்டப்படுகிறது."
  ],

  output: `Day 1 : Present
Day 2 : Present
Day 3 : Holiday
Day 4 : Present
Day 5 : Present
Attendance checking completed.

💡 Note 
Use the Continue Statement when you want to skip only the current iteration and continue executing the remaining iterations of the loop.

💡 குறிப்பு 
Loop-ஐ நிறுத்தாமல், தற்போதைய Iteration-ஐ மட்டும் Skip செய்து அடுத்த Iteration-ஐ தொடர வேண்டுமெனில் Continue Statement பயன்படுத்த வேண்டும்.`,

  locked: true,

  completed: false
},
  {
  id: 17,

  title: "One-Dimensional Array",

  englishDefinition:
    "A One-Dimensional Array is a collection of elements of the same data type stored in a single variable. Each element is accessed using an index, which starts from 0.",

  tamilDefinition:
    "One-Dimensional Array என்பது ஒரே Data Type-ஐ சேர்ந்த பல மதிப்புகளை (Values) ஒரே Variable-ல் சேமிக்க உதவும் Data Structure ஆகும். Array-யில் உள்ள ஒவ்வொரு Value-யும் Index மூலம் அணுகப்படுகிறது. Index எப்போதும் 0-இல் இருந்து தொடங்குகிறது.",

  realWorldUsage:
    "Developers use One-Dimensional Arrays to store marks of a student, product prices, employee salaries, monthly sales, temperatures, and other collections of similar data.",

  realWorldUsageTamil:
    "Developers ஒரு மாணவரின் மதிப்பெண்கள், Product Prices, Employee Salaries, Monthly Sales, Temperature Records போன்ற ஒரே வகையான பல தரவுகளை சேமிக்க One-Dimensional Array-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `dataType[] arrayName = {value1, value2, value3, ...};`,

  syntaxExplanationEnglish: [
    "dataType → Specifies the type of values stored in the array.",
    "[] → Indicates that the variable is an array.",
    "arrayName → The name of the array.",
    "Values are enclosed inside curly braces {}.",
    "Array indexing starts from 0."
  ],

  syntaxExplanationTamil: [
    "dataType → Array-ல் சேமிக்கப்படும் Values-ன் Data Type.",
    "[] → இது ஒரு Array என்பதை குறிக்கிறது.",
    "arrayName → Array-ன் பெயர்.",
    "Values Curly Braces {}-க்குள் எழுதப்படுகின்றன.",
    "Array-ன் Index எப்போதும் 0-இல் இருந்து தொடங்குகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        int[] marks = {85, 90, 78, 88, 95};

        System.out.println("Student : Deepak");
        System.out.println("Subject Marks");

        for(int i = 0; i < marks.length; i++){

            System.out.println("Subject " + (i + 1) + " : " + marks[i]);

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Line 5: Creates an integer array named marks and stores five subject marks.",
    "Lines 7-8: Displays the student name and heading.",
    "Line 10: The loop starts from index 0.",
    "The condition i < marks.length ensures all array elements are accessed.",
    "marks.length returns the total number of elements in the array.",
    "marks[i] accesses each mark using its index.",
    "The loop ends after displaying all five marks."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: marks என்ற Integer Array உருவாக்கப்பட்டு 5 பாடங்களின் மதிப்பெண்கள் சேமிக்கப்படுகின்றன.",
    "வரி 7-8: மாணவரின் பெயரும் தலைப்பும் காட்டப்படுகின்றன.",
    "வரி 10: Loop Index 0-இல் இருந்து தொடங்குகிறது.",
    "i < marks.length என்பதால் Array-யில் உள்ள அனைத்து Elements-மும் அணுகப்படுகின்றன.",
    "marks.length என்பது Array-யில் உள்ள மொத்த Elements-ன் எண்ணிக்கையை வழங்குகிறது.",
    "marks[i] மூலம் ஒவ்வொரு மதிப்பெண்ணும் அதன் Index-ஐ பயன்படுத்தி பெறப்படுகிறது.",
    "அனைத்து Marks-யும் காட்டப்பட்ட பிறகு Loop முடிவடைகிறது."
  ],

  output: `Student : Deepak
Subject Marks
Subject 1 : 85
Subject 2 : 90
Subject 3 : 78
Subject 4 : 88
Subject 5 : 95

💡 Note
A One-Dimensional Array stores multiple values of the same data type in a single variable. Each value is accessed using its index, starting from 0. Arrays are commonly used with loops to process all elements efficiently.

💡 குறிப்பு
One-Dimensional Array ஒரே Data Type-ஐ சேர்ந்த பல Values-ஐ ஒரே Variable-ல் சேமிக்க உதவுகிறது. ஒவ்வொரு Value-யும் அதன் Index மூலம் அணுகப்படுகிறது. Index எப்போதும் 0-இல் இருந்து தொடங்குகிறது. Array-கள் பொதுவாக Loops உடன் சேர்த்து பயன்படுத்தப்படுகின்றன.`,

  locked: true,

  completed: false
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