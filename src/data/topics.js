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

  title: "Two-Dimensional Array",

  englishDefinition:
    "A Two-Dimensional Array is an array of arrays used to store data in rows and columns. Each element is accessed using two indexes: one for the row and one for the column.",

  tamilDefinition:
    "Two-Dimensional Array என்பது Row மற்றும் Column வடிவில் தரவுகளை சேமிக்க பயன்படும் Array ஆகும். இதில் ஒவ்வொரு Value-யும் இரண்டு Index-கள் (Row Index மற்றும் Column Index) மூலம் அணுகப்படுகிறது.",

  realWorldUsage:
    "Developers use Two-Dimensional Arrays to store student marks, seating arrangements, matrices, game boards, monthly sales reports, and other tabular data.",

  realWorldUsageTamil:
    "Developers மாணவர்களின் மதிப்பெண்கள், Seating Arrangement, Matrices, Game Boards, Monthly Sales Reports மற்றும் Table வடிவிலான தரவுகளை சேமிக்க Two-Dimensional Array-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `dataType[][] arrayName = {
    {value1, value2, value3},
    {value4, value5, value6}
};`,

  syntaxExplanationEnglish: [
    "dataType specifies the type of values stored in the array.",
    "[][] indicates a two-dimensional array.",
    "The first index represents the row.",
    "The second index represents the column.",
    "Nested loops are commonly used to access all elements."
  ],

  syntaxExplanationTamil: [
    "dataType என்பது Array-ல் சேமிக்கப்படும் Values-ன் Data Type ஆகும்.",
    "[][] என்பது இது Two-Dimensional Array என்பதை குறிக்கிறது.",
    "முதல் Index Row-ஐ குறிக்கிறது.",
    "இரண்டாவது Index Column-ஐ குறிக்கிறது.",
    "அனைத்து Elements-ஐ அணுக பொதுவாக Nested Loop பயன்படுத்தப்படுகிறது."
  ],

  exampleProgram: `public class Main {

    public static void main(String[] args) {

        int[][] marks = {
            {85, 90, 78},
            {88, 76, 92},
            {91, 84, 87}
        };

        for(int student = 0; student < marks.length; student++){

            System.out.println("Student " + (student + 1));

            for(int subject = 0; subject < marks[student].length; subject++){

                System.out.println("Subject " + (subject + 1) + " : " + marks[student][subject]);

            }

            System.out.println();

        }

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: The main() method is the starting point of the Java program.",
    "Lines 5-9: Creates a two-dimensional array named marks containing the marks of three students.",
    "Line 11: The outer loop accesses each student (row).",
    "Line 15: Displays the current student's details.",
    "Line 17: The inner loop accesses each subject (column).",
    "marks[student][subject] retrieves the mark of a specific student and subject.",
    "After displaying all subjects of one student, the outer loop moves to the next student.",
    "The process continues until all students' marks are displayed."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5-9: marks என்ற Two-Dimensional Array உருவாக்கப்பட்டு 3 மாணவர்களின் மதிப்பெண்கள் சேமிக்கப்படுகின்றன.",
    "வரி 11: Outer Loop ஒவ்வொரு மாணவரையும் (Row) அணுகுகிறது.",
    "வரி 15: தற்போதைய மாணவரின் விவரம் காட்டப்படுகிறது.",
    "வரி 17: Inner Loop ஒவ்வொரு பாடத்தையும் (Column) அணுகுகிறது.",
    "marks[student][subject] மூலம் குறிப்பிட்ட மாணவரின் குறிப்பிட்ட பாடத்தின் மதிப்பெண் பெறப்படுகிறது.",
    "ஒரு மாணவரின் அனைத்து பாடங்களும் காட்டப்பட்ட பிறகு Outer Loop அடுத்த மாணவருக்கு செல்கிறது.",
    "அனைத்து மாணவர்களின் மதிப்பெண்களும் காட்டப்படும் வரை இந்த செயல்முறை தொடர்கிறது."
  ],

  output: `Student 1
Subject 1 : 85
Subject 2 : 90
Subject 3 : 78

Student 2
Subject 1 : 88
Subject 2 : 76
Subject 3 : 92

Student 3
Subject 1 : 91
Subject 2 : 84
Subject 3 : 87

💡 Note 
A Two-Dimensional Array stores data in rows and columns. The first index represents the row, and the second index represents the column. Nested loops are commonly used to access all elements.

💡 குறிப்பு 
Two-Dimensional Array தரவுகளை Row மற்றும் Column வடிவில் சேமிக்கிறது. முதல் Index Row-ஐ குறிக்கிறது; இரண்டாவது Index Column-ஐ குறிக்கிறது. அனைத்து Elements-ஐ அணுக பொதுவாக Nested Loop பயன்படுத்தப்படுகிறது.`,

  locked: true,

  completed: false
},
  {
  id: 19,

  title: "Array Operations",

  englishDefinition:
    "Array Operations are the common actions performed on arrays, such as traversing, searching, updating, inserting, and deleting elements.",

  tamilDefinition:
    "Array Operations என்பது Array-ல் உள்ள தரவுகளின் மீது செய்யப்படும் பொதுவான செயல்பாடுகள் ஆகும். அவை Traversing, Searching, Updating, Inserting மற்றும் Deleting ஆகும்.",

  realWorldUsage:
    "Developers perform array operations to display student records, search for a product, update employee information, insert new records, and remove unwanted data.",

  realWorldUsageTamil:
    "Developers மாணவர்களின் தகவல்களைக் காட்ட, Products-ஐ தேட, Employee தகவல்களை புதுப்பிக்க, புதிய Records-ஐ சேர்க்க மற்றும் தேவையில்லாத தரவுகளை நீக்க Array Operations-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `array[index]`,

  syntaxExplanationEnglish: [
    "Traversing → Access every element in the array.",
    "Searching → Find a specific element in the array.",
    "Updating → Change the value of an existing element.",
    "Inserting → Add a new element at a specific position.",
    "Deleting → Remove an existing element from the array."
  ],

  syntaxExplanationTamil: [
    "Traversing → Array-ல் உள்ள அனைத்து Elements-யும் ஒன்றன்பின் ஒன்றாக அணுகுவது.",
    "Searching → குறிப்பிட்ட Element-ஐ தேடுவது.",
    "Updating → ஏற்கனவே உள்ள Value-ஐ மாற்றுவது.",
    "Inserting → புதிய Element-ஐ குறிப்பிட்ட இடத்தில் சேர்ப்பது.",
    "Deleting → ஏற்கனவே உள்ள Element-ஐ நீக்குவது."
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
    "Line 3: The main() method starts the program.",
    "Line 5: Creates an array containing five subject marks.",
    "Lines 7-8: Displays the student name and heading.",
    "Line 10: The for loop traverses every element in the array.",
    "marks.length gives the total number of elements.",
    "marks[i] accesses each mark using its index.",
    "All subject marks are displayed one by one."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 5: 5 பாடங்களின் மதிப்பெண்களை கொண்ட Array உருவாக்கப்படுகிறது.",
    "வரி 7-8: மாணவரின் பெயரும் தலைப்பும் காட்டப்படுகின்றன.",
    "வரி 10: For Loop Array-ல் உள்ள அனைத்து Elements-யும் ஒன்றன்பின் ஒன்றாக அணுகுகிறது.",
    "marks.length என்பது Array-யில் உள்ள மொத்த Elements-ன் எண்ணிக்கையை வழங்குகிறது.",
    "marks[i] மூலம் ஒவ்வொரு மதிப்பெண்ணும் பெறப்படுகிறது.",
    "அனைத்து Subject Marks-யும் ஒன்றன்பின் ஒன்றாக காட்டப்படுகின்றன."
  ],

  output: `Student : Deepak
Subject Marks
Subject 1 : 85
Subject 2 : 90
Subject 3 : 78
Subject 4 : 88
Subject 5 : 95

💡 Note 
The five common array operations are Traversing, Searching, Updating, Inserting, and Deleting. Traversing is the most frequently used operation and is usually performed using loops.

💡 குறிப்பு 
Array-ல் செய்யப்படும் முக்கிய செயல்பாடுகள் Traversing, Searching, Updating, Inserting மற்றும் Deleting ஆகும். இதில் Traversing அதிகமாக பயன்படுத்தப்படும் Operation ஆகும். இது பொதுவாக Loops மூலம் செய்யப்படுகிறது.`,

  locked: true,

  completed: false
},
{
  id: 20,

  title: "Methods",

  englishDefinition:
    "A Method is a block of code that performs a specific task. It can be called whenever needed, making the program more organized, reusable, and easier to maintain.",

  tamilDefinition:
    "Method என்பது ஒரு குறிப்பிட்ட பணியை (Specific Task) செய்யும் Code Block ஆகும். தேவையான போதெல்லாம் அதை அழைத்து (Call செய்து) பயன்படுத்தலாம். இதனால் Program ஒழுங்காகவும், மீண்டும் பயன்படுத்தக்கூடியதாகவும், பராமரிக்க எளிதாகவும் இருக்கும்.",

  realWorldUsage:
    "Developers use methods to calculate marks, validate login credentials, process payments, generate reports, send emails, and perform reusable tasks in applications.",

  realWorldUsageTamil:
    "Developers மதிப்பெண்களை கணக்கிட, Login தகவல்களை சரிபார்க்க, Payment செயலாக்க, Reports உருவாக்க, Email அனுப்ப மற்றும் மீண்டும் பயன்படுத்தக்கூடிய செயல்களை உருவாக்க Methods-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `returnType methodName(parameters){

    // Code

    return value;

}`,

  syntaxExplanationEnglish: [
    "returnType specifies the type of value returned by the method.",
    "methodName is the name used to call the method.",
    "parameters receive values from the calling method.",
    "The return statement sends the result back to the caller.",
    "Methods help avoid code duplication."
  ],

  syntaxExplanationTamil: [
    "returnType என்பது Method எந்த வகையான மதிப்பை திருப்பி அனுப்பும் என்பதை குறிப்பிடுகிறது.",
    "methodName என்பது Method-ன் பெயர்.",
    "parameters என்பது Method-க்கு அனுப்பப்படும் மதிப்புகளை பெறுகிறது.",
    "return Statement கணக்கிடப்பட்ட முடிவை அழைத்த இடத்திற்கு திருப்பி அனுப்புகிறது.",
    "Methods ஒரே Code-ஐ பலமுறை எழுத வேண்டிய தேவையை குறைக்கின்றன."
  ],

  exampleProgram: `public class Main {

    static int calculateTotal(int[] marks){

        int total = 0;

        for(int i = 0; i < marks.length; i++){

            total += marks[i];

        }

        return total;

    }

    public static void main(String[] args) {

        int[] marks = {85, 90, 78, 88, 95};

        int totalMarks = calculateTotal(marks);

        System.out.println("Student : Deepak");
        System.out.println("Total Marks : " + totalMarks);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Lines 3-15: Defines a method named calculateTotal().",
    "The method receives an array of marks as a parameter.",
    "The for loop adds all marks together.",
    "The total marks are returned using the return statement.",
    "Line 19: Creates an array containing the student's marks.",
    "Line 21: Calls the calculateTotal() method and stores the returned value.",
    "Lines 23-24: Displays the student's name and total marks."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3-15: calculateTotal() என்ற Method உருவாக்கப்படுகிறது.",
    "இந்த Method Marks Array-ஐ Parameter ஆக பெறுகிறது.",
    "For Loop அனைத்து மதிப்பெண்களையும் கூட்டுகிறது.",
    "return Statement மூலம் Total Marks திருப்பி அனுப்பப்படுகிறது.",
    "வரி 19: மாணவரின் மதிப்பெண்களை கொண்ட Array உருவாக்கப்படுகிறது.",
    "வரி 21: calculateTotal() Method அழைக்கப்பட்டு அதன் Return Value totalMarks-ல் சேமிக்கப்படுகிறது.",
    "வரி 23-24: மாணவரின் பெயரும் Total Marks-மும் காட்டப்படுகின்றன."
  ],

  output: `Student : Deepak
Total Marks : 436

💡 Note 
Methods divide a program into smaller, reusable blocks. Instead of writing the same code multiple times, you can write it once and call it whenever needed.

💡 குறிப்பு 
Methods ஒரு பெரிய Program-ஐ சிறிய, மீண்டும் பயன்படுத்தக்கூடிய பகுதிகளாக பிரிக்க உதவுகின்றன. ஒரே Code-ஐ பலமுறை எழுதுவதற்கு பதிலாக, ஒருமுறை எழுதிவிட்டு தேவையான இடங்களில் அழைத்து பயன்படுத்தலாம்.`,

  locked: true,

  completed: false
},
{
  id: 21,

  title: "Return Type",

  englishDefinition:
    "A Return Type specifies the type of value that a method returns to the calling method. If a method does not return any value, the return type should be void.",

  tamilDefinition:
    "Return Type என்பது ஒரு Method எந்த வகையான மதிப்பை (Value) அழைத்த இடத்திற்கு திருப்பி அனுப்புகிறது என்பதை குறிப்பிடுகிறது. ஒரு Method எந்த மதிப்பையும் திருப்பி அனுப்பவில்லை என்றால் அதன் Return Type void ஆக இருக்க வேண்டும்.",

  realWorldUsage:
    "Developers use return types to send calculated results, user information, account balances, product prices, and other processed data from one method to another.",

  realWorldUsageTamil:
    "Developers கணக்கிடப்பட்ட முடிவுகள், User தகவல்கள், Account Balance, Product Price மற்றும் Process செய்யப்பட்ட பிற தரவுகளை ஒரு Method-இல் இருந்து மற்றொரு Method-க்கு அனுப்ப Return Type-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `returnType methodName(){

    return value;

}`,

  syntaxExplanationEnglish: [
    "returnType specifies the type of value returned by the method.",
    "The return statement sends the value back to the calling method.",
    "The returned value should match the declared return type.",
    "If no value is returned, the return type should be void."
  ],

  syntaxExplanationTamil: [
    "returnType என்பது Method எந்த வகையான Value-ஐ திருப்பி அனுப்பும் என்பதை குறிப்பிடுகிறது.",
    "return Statement Value-ஐ Method-ஐ அழைத்த இடத்திற்கு அனுப்புகிறது.",
    "திருப்பி அனுப்பப்படும் Value, Return Type-க்கு பொருந்த வேண்டும்.",
    "எந்த Value-யும் திருப்பி அனுப்பவில்லை என்றால் Return Type void ஆக இருக்க வேண்டும்."
  ],

  exampleProgram: `public class Main {

    static int getMarks(){

        return 95;

    }

    public static void main(String[] args) {

        int marks = getMarks();

        System.out.println("Student : Deepak");
        System.out.println("Marks : " + marks);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Line 3: Creates a method named getMarks() with the return type int.",
    "Line 5: Returns the value 95 to the calling method.",
    "Line 9: Program execution starts from the main() method.",
    "Line 11: Calls the getMarks() method.",
    "The returned value is stored in the marks variable.",
    "Lines 13-14: Displays the student's name and marks."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: int Return Type-உடன் getMarks() என்ற Method உருவாக்கப்படுகிறது.",
    "வரி 5: return Statement மூலம் 95 என்ற மதிப்பு Method-ஐ அழைத்த இடத்திற்கு அனுப்பப்படுகிறது.",
    "வரி 9: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 11: getMarks() Method அழைக்கப்படுகிறது.",
    "Method திருப்பி அனுப்பிய Value marks Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 13-14: மாணவரின் பெயரும் மதிப்பெண்ணும் Console-ல் காட்டப்படுகின்றன."
  ],

  output: `Student : Deepak
Marks : 95

💡 Note 
A Return Type specifies what type of value a method sends back to the caller. If a method does not return any value, use void as the return type.

💡 குறிப்பு 
ஒரு Method எந்த வகையான Value-ஐ திருப்பி அனுப்புகிறது என்பதை Return Type குறிப்பிடுகிறது. Method எந்த Value-யும் திருப்பி அனுப்பவில்லை என்றால் அதன் Return Type void ஆக இருக்க வேண்டும்.`,

  locked: true,

  completed: false
},
  
{
  id: 22,

  title: "Method Overloading",

  englishDefinition:
    "Method Overloading is the process of creating multiple methods with the same name but different parameters. The compiler determines which method to call based on the number or type of arguments passed.",

  tamilDefinition:
    "Method Overloading என்பது ஒரே பெயரில் (Same Method Name) பல Methods-ஐ வெவ்வேறு Parameters-உடன் உருவாக்கும் செயல்முறையாகும். எந்த Method அழைக்கப்பட வேண்டும் என்பதை அனுப்பப்படும் Arguments-ன் எண்ணிக்கை அல்லது Data Type அடிப்படையில் Compiler தீர்மானிக்கிறது.",

  realWorldUsage:
    "Developers use Method Overloading when the same operation needs to be performed with different numbers or types of inputs, such as calculating totals, searching records, processing payments, and validating user information.",

  realWorldUsageTamil:
    "Developers ஒரே செயல்பாட்டை (Operation) வெவ்வேறு எண்ணிக்கையிலான அல்லது வெவ்வேறு வகையான Input-களுடன் செய்ய வேண்டிய சூழலில் Method Overloading-ஐ பயன்படுத்துகின்றனர். உதாரணமாக Total கணக்கிடுதல், Records தேடுதல், Payment செயலாக்குதல் மற்றும் User தகவல்களை சரிபார்த்தல் போன்றவற்றில் பயன்படுத்தப்படுகிறது.",

  syntax: `returnType methodName(parameter1){

    // Code

}

returnType methodName(parameter1, parameter2){

    // Code

}`,

  syntaxExplanationEnglish: [
    "The method name remains the same.",
    "The parameter list must be different.",
    "The difference can be in the number or type of parameters.",
    "The compiler automatically selects the appropriate method."
  ],

  syntaxExplanationTamil: [
    "Method Name ஒரே மாதிரியாக இருக்கும்.",
    "Parameters மட்டும் வேறுபட்டிருக்க வேண்டும்.",
    "Parameters-ன் எண்ணிக்கை அல்லது Data Type வேறுபடலாம்.",
    "தேவையான Method-ஐ Compiler தானாக தேர்வு செய்கிறது."
  ],

  exampleProgram: `public class Main {

    static int calculateTotal(int mark1, int mark2){

        return mark1 + mark2;

    }

    static int calculateTotal(int mark1, int mark2, int mark3){

        return mark1 + mark2 + mark3;

    }

    public static void main(String[] args) {

        System.out.println("Total Marks (2 Subjects) : " + calculateTotal(85, 90));

        System.out.println("Total Marks (3 Subjects) : " + calculateTotal(85, 90, 78));

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Main.",
    "Lines 3-7: Creates the first calculateTotal() method that accepts two parameters.",
    "Lines 9-13: Creates another calculateTotal() method with the same name but three parameters.",
    "The two methods have the same name but different parameter lists.",
    "Line 17: Calls the first method because two arguments are passed.",
    "Line 19: Calls the second method because three arguments are passed.",
    "The compiler automatically selects the correct overloaded method."
  ],

  programExplanationTamil: [
    "வரி 1: Main என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3-7: இரண்டு Parameters-ஐ பெறும் calculateTotal() Method உருவாக்கப்படுகிறது.",
    "வரி 9-13: அதே பெயரில் மூன்று Parameters-ஐ பெறும் மற்றொரு calculateTotal() Method உருவாக்கப்படுகிறது.",
    "இரண்டு Methods-க்கும் ஒரே பெயர் இருந்தாலும் Parameters வேறுபடுகின்றன.",
    "வரி 17: இரண்டு Arguments அனுப்பப்பட்டதால் முதல் Method அழைக்கப்படுகிறது.",
    "வரி 19: மூன்று Arguments அனுப்பப்பட்டதால் இரண்டாவது Method அழைக்கப்படுகிறது.",
    "சரியான Method-ஐ Compiler தானாக தேர்வு செய்கிறது."
  ],

  output: `Total Marks (2 Subjects) : 175
Total Marks (3 Subjects) : 253

💡 Note 
Method Overloading allows multiple methods to have the same name as long as their parameter lists are different. It improves code readability and reusability.

💡 குறிப்பு 
Method Overloading-ல் ஒரே பெயரில் பல Methods இருக்கலாம். ஆனால் அவற்றின் Parameters வேறுபட்டிருக்க வேண்டும். இது Code-ஐ படிக்கவும் மீண்டும் பயன்படுத்தவும் எளிதாக்குகிறது.`,

  locked: true,

  completed: false
},
{
  id: 23,

  title: "Class",

  englishDefinition:
    "A Class is a blueprint or template used to create objects. It defines the properties (variables) and behaviors (methods) that objects of the class will have.",

  tamilDefinition:
    "Class என்பது Objects-ஐ உருவாக்குவதற்கான ஒரு Blueprint அல்லது Template ஆகும். இது ஒரு Object-ன் Properties (Variables) மற்றும் Behaviors (Methods) ஆகியவற்றை வரையறுக்கிறது.",

  realWorldUsage:
    "Developers use classes to represent real-world entities such as Students, Employees, Products, Customers, Bank Accounts, and Vehicles in software applications.",

  realWorldUsageTamil:
    "Developers Students, Employees, Products, Customers, Bank Accounts மற்றும் Vehicles போன்ற நிஜ உலக பொருட்களை (Real-World Entities) Software Application-களில் பிரதிநிதித்துவப்படுத்த (Represent) Classes-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `class ClassName{

    // Variables

    // Methods

}`,

  syntaxExplanationEnglish: [
    "class is the keyword used to declare a class.",
    "ClassName is the name of the class.",
    "Variables store the data of the class.",
    "Methods define the actions performed by the class.",
    "A class acts as a blueprint for creating objects."
  ],

  syntaxExplanationTamil: [
    "class என்பது Class உருவாக்க பயன்படும் Keyword ஆகும்.",
    "ClassName என்பது Class-ன் பெயர்.",
    "Variables Class-ன் தரவுகளை (Data) சேமிக்கின்றன.",
    "Methods Class செய்யும் செயல்களை (Actions) வரையறுக்கின்றன.",
    "Class என்பது Objects உருவாக்க பயன்படும் Blueprint ஆக செயல்படுகிறது."
  ],

  exampleProgram: `class Student{

    String name = "Deepak";
    int age = 20;
    String department = "Cyber Security";

}

public class Main{

    public static void main(String[] args){

        System.out.println("Student Class Created Successfully");

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Student.",
    "Lines 3-5: Declares three variables: name, age, and department.",
    "These variables represent the data of a student.",
    "Line 9: Creates the Main class.",
    "Line 11: Program execution starts from the main() method.",
    "Line 13: Displays a confirmation message.",
    "The Student class is created, but no object has been created yet."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3-5: name, age மற்றும் department என்ற மூன்று Variables அறிவிக்கப்படுகின்றன.",
    "இந்த Variables ஒரு மாணவரின் தகவல்களை குறிக்கின்றன.",
    "வரி 9: Main என்ற Class உருவாக்கப்படுகிறது.",
    "வரி 11: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 13: ஒரு Confirmation Message Console-ல் காட்டப்படுகிறது.",
    "Student Class உருவாக்கப்பட்டுள்ளது. ஆனால் இதுவரை எந்த Object-மும் உருவாக்கப்படவில்லை."
  ],

  output: `Student Class Created Successfully

💡 Note 
A Class is only a blueprint. It does not occupy memory for its variables until an object is created. Objects are created from a class.

💡 குறிப்பு 
Class என்பது ஒரு Blueprint மட்டுமே. அதிலிருந்து Object உருவாக்கப்படும் வரை அதன் Variables-க்கு Memory ஒதுக்கப்படாது. Class-இல் இருந்து தான் Objects உருவாக்கப்படுகின்றன.`,

  locked: true,

  completed: false
},
  {
  id: 24,

  title: "Object",

  englishDefinition:
    "An Object is an instance of a class. It is created from a class and is used to access the variables and methods defined in that class.",

  tamilDefinition:
    "Object என்பது ஒரு Class-ன் Instance ஆகும். இது ஒரு Class-இல் இருந்து உருவாக்கப்படுகிறது. Class-ல் உள்ள Variables மற்றும் Methods-ஐ அணுகுவதற்கு Object பயன்படுத்தப்படுகிறது.",

  realWorldUsage:
    "Developers create objects to represent real-world entities such as students, employees, products, customers, and bank accounts. Each object stores its own data and can perform the actions defined in its class.",

  realWorldUsageTamil:
    "Developers Students, Employees, Products, Customers மற்றும் Bank Accounts போன்ற நிஜ உலக பொருட்களை (Real-World Entities) பிரதிநிதித்துவப்படுத்த Objects-ஐ உருவாக்குகின்றனர். ஒவ்வொரு Object-மும் தனது சொந்த Data-வை சேமித்து, Class-ல் வரையறுக்கப்பட்ட செயல்களைச் செய்ய முடியும்.",

  syntax: `ClassName objectName = new ClassName();`,

  syntaxExplanationEnglish: [
    "ClassName specifies the class from which the object is created.",
    "objectName is the name of the object.",
    "The new keyword creates a new object.",
    "The object can access the variables and methods of its class using the dot (.) operator."
  ],

  syntaxExplanationTamil: [
    "ClassName என்பது எந்த Class-இல் இருந்து Object உருவாக்கப்படுகிறது என்பதை குறிப்பிடுகிறது.",
    "objectName என்பது Object-ன் பெயர்.",
    "new Keyword ஒரு புதிய Object-ஐ உருவாக்குகிறது.",
    "Object, Dot (.) Operator மூலம் Class-ல் உள்ள Variables மற்றும் Methods-ஐ அணுகுகிறது."
  ],

  exampleProgram: `class Student{

    String name;
    int age;
    String department;

}

public class Main{

    public static void main(String[] args){

        Student student1 = new Student();

        student1.name = "Deepak";
        student1.age = 20;
        student1.department = "Cyber Security";

        System.out.println("Student Name : " + student1.name);
        System.out.println("Age : " + student1.age);
        System.out.println("Department : " + student1.department);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Student.",
    "Lines 3-5: Declares the variables name, age, and department.",
    "Line 11: Program execution starts from the main() method.",
    "Line 13: Creates an object named student1 from the Student class using the new keyword.",
    "Lines 15-17: Assign values to the object's variables.",
    "Lines 19-21: Access and display the object's variables using the dot (.) operator."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3-5: name, age மற்றும் department என்ற Variables அறிவிக்கப்படுகின்றன.",
    "வரி 11: Java Program main() Method-இல் இருந்து இயங்கத் தொடங்குகிறது.",
    "வரி 13: new Keyword-ஐ பயன்படுத்தி Student Class-இல் இருந்து student1 என்ற Object உருவாக்கப்படுகிறது.",
    "வரி 15-17: Object-ன் Variables-க்கு Values வழங்கப்படுகின்றன.",
    "வரி 19-21: Dot (.) Operator மூலம் Object-ன் Variables அணுகப்பட்டு Console-ல் காட்டப்படுகின்றன."
  ],

  output: `Student Name : Deepak
Age : 20
Department : Cyber Security

💡 Note 
An Object is created from a Class. A Class acts as a blueprint, while an Object is the actual instance that stores data and can access the class's variables and methods.

💡 குறிப்பு 
Object என்பது Class-இல் இருந்து உருவாக்கப்படுகிறது. Class என்பது Blueprint ஆகும்; Object என்பது அந்த Blueprint-இல் இருந்து உருவாக்கப்பட்ட உண்மையான Instance ஆகும். Object மூலம் Class-ன் Variables மற்றும் Methods-ஐ பயன்படுத்தலாம்.`,

  locked: true,

  completed: false
},
  {
  id: 25,

  title: "Constructor",

  englishDefinition:
    "A Constructor is a special method that is automatically called when an object is created. It is used to initialize the object's data.",

  tamilDefinition:
    "Constructor என்பது Object உருவாக்கப்படும் போது தானாகவே (Automatically) அழைக்கப்படும் ஒரு சிறப்பு Method ஆகும். இது Object-ன் தரவுகளை (Data) ஆரம்ப நிலையில் (Initialize) அமைக்க பயன்படுகிறது.",

  realWorldUsage:
    "Developers use constructors to initialize objects with default or user-provided values, such as student information, employee details, product information, and bank account data.",

  realWorldUsageTamil:
    "Developers Student தகவல்கள், Employee விவரங்கள், Product தகவல்கள் மற்றும் Bank Account Data போன்றவற்றை Object உருவாக்கும் போதே ஆரம்ப மதிப்புகளுடன் (Initial Values) அமைக்க Constructors-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `ClassName(){

    // Initialization Code

}`,

  syntaxExplanationEnglish: [
    "A constructor has the same name as the class.",
    "A constructor does not have a return type, not even void.",
    "It is automatically called when an object is created.",
    "Constructors are mainly used to initialize object data."
  ],

  syntaxExplanationTamil: [
    "Constructor-ன் பெயர் Class-ன் பெயருடன் ஒரே மாதிரியாக இருக்கும்.",
    "Constructor-க்கு Return Type இருக்காது; void கூட பயன்படுத்தப்படாது.",
    "Object உருவாக்கப்படும் போது Constructor தானாகவே அழைக்கப்படும்.",
    "Constructor பொதுவாக Object-ன் ஆரம்ப தரவுகளை (Initial Data) அமைக்க பயன்படுகிறது."
  ],

  exampleProgram: `class Student{

    String name;
    int age;
    String department;

    Student(){

        name = "Deepak";
        age = 20;
        department = "Cyber Security";

    }

}

public class Main{

    public static void main(String[] args){

        Student student1 = new Student();

        System.out.println("Student Name : " + student1.name);
        System.out.println("Age : " + student1.age);
        System.out.println("Department : " + student1.department);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Student.",
    "Lines 3-5: Declares the variables name, age, and department.",
    "Lines 7-13: Creates a constructor named Student().",
    "The constructor initializes the object's variables.",
    "Line 21: Creates a Student object using the new keyword.",
    "When the object is created, the constructor is automatically called.",
    "Lines 23-25: Displays the initialized values stored in the object."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3-5: name, age மற்றும் department என்ற Variables அறிவிக்கப்படுகின்றன.",
    "வரி 7-13: Student() என்ற Constructor உருவாக்கப்படுகிறது.",
    "Constructor Object-ன் Variables-க்கு ஆரம்ப மதிப்புகளை (Initial Values) வழங்குகிறது.",
    "வரி 21: new Keyword மூலம் Student Object உருவாக்கப்படுகிறது.",
    "Object உருவாக்கப்படும் போது Constructor தானாகவே அழைக்கப்படுகிறது.",
    "வரி 23-25: Constructor அமைத்த மதிப்புகள் Console-ல் காட்டப்படுகின்றன."
  ],

  output: `Student Name : Deepak
Age : 20
Department : Cyber Security

💡 Note 
A Constructor is automatically executed when an object is created. Its main purpose is to initialize the object's data. Unlike methods, constructors do not have a return type.

💡 குறிப்பு 
Object உருவாக்கப்படும் போது Constructor தானாகவே இயங்குகிறது. இதன் முக்கிய நோக்கம் Object-ன் ஆரம்ப தரவுகளை (Initial Data) அமைப்பதாகும். Methods போல Constructor-க்கு Return Type இருக்காது.`,

  locked: true,

  completed: false
},
  {
  id: 26,

  title: "this Keyword",

  englishDefinition:
    "The this keyword is a reference to the current object. It is used to access the current object's variables, methods, and constructors.",

  tamilDefinition:
    "this Keyword என்பது தற்போதைய (Current) Object-ஐ குறிக்கும் ஒரு Reference ஆகும். இது தற்போதைய Object-ன் Variables, Methods மற்றும் Constructors-ஐ அணுக பயன்படுகிறது.",

  realWorldUsage:
    "Developers use the this keyword to distinguish instance variables from local variables, access the current object's methods, and call another constructor within the same class.",

  realWorldUsageTamil:
    "Developers Instance Variables மற்றும் Local Variables-ஐ வேறுபடுத்த, தற்போதைய Object-ன் Methods-ஐ அணுக, மற்றும் அதே Class-ல் உள்ள மற்றொரு Constructor-ஐ அழைக்க this Keyword-ஐ பயன்படுத்துகின்றனர்.",

  syntax: `this.variableName;

this.methodName();

this();`,

  syntaxExplanationEnglish: [
    "this refers to the current object.",
    "this.variableName accesses the current object's variable.",
    "this.methodName() calls a method of the current object.",
    "this() calls another constructor of the same class."
  ],

  syntaxExplanationTamil: [
    "this என்பது தற்போதைய Object-ஐ குறிக்கிறது.",
    "this.variableName தற்போதைய Object-ன் Variable-ஐ அணுகுகிறது.",
    "this.methodName() தற்போதைய Object-ன் Method-ஐ அழைக்கிறது.",
    "this() அதே Class-ல் உள்ள மற்றொரு Constructor-ஐ அழைக்கிறது."
  ],

  exampleProgram: `class Student{

    String name;

    Student(String name){

        this.name = name;

    }

}

public class Main{

    public static void main(String[] args){

        Student student1 = new Student("Deepak");

        System.out.println("Student Name : " + student1.name);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates a class named Student.",
    "Line 3: Declares an instance variable named name.",
    "Line 5: Creates a constructor that accepts a parameter named name.",
    "Line 7: this.name refers to the instance variable, while name refers to the constructor parameter.",
    "The assignment stores the parameter value in the object's variable.",
    "Line 15: Creates a Student object and passes 'Deepak' to the constructor.",
    "Line 17: Displays the value stored in the object's variable."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற பெயரில் ஒரு Class உருவாக்கப்படுகிறது.",
    "வரி 3: name என்ற Instance Variable அறிவிக்கப்படுகிறது.",
    "வரி 5: name என்ற Parameter-ஐ பெறும் Constructor உருவாக்கப்படுகிறது.",
    "வரி 7: this.name என்பது Object-ன் Instance Variable-ஐ குறிக்கிறது; name என்பது Constructor Parameter-ஐ குறிக்கிறது.",
    "இந்த Assignment மூலம் Parameter-ன் மதிப்பு Object-ன் Variable-ல் சேமிக்கப்படுகிறது.",
    "வரி 15: 'Deepak' என்ற மதிப்புடன் Student Object உருவாக்கப்படுகிறது.",
    "வரி 17: Object-ல் சேமிக்கப்பட்ட பெயர் Console-ல் காட்டப்படுகிறது."
  ],

  output: `Student Name : Deepak

💡 Note 
When an instance variable and a constructor parameter have the same name, Java gives priority to the local parameter. The this keyword is used to refer to the current object's instance variable.

💡 குறிப்பு 
Instance Variable மற்றும் Constructor Parameter இரண்டிற்கும் ஒரே பெயர் இருந்தால், Java முதலில் Constructor Parameter-ஐ பயன்படுத்தும். தற்போதைய Object-ன் Instance Variable-ஐ குறிக்க this Keyword பயன்படுத்தப்படுகிறது.`,

  locked: true,

  completed: false
},
  {
  id: 27,

  title: "Inheritance",

  englishDefinition:
    "Inheritance is an Object-Oriented Programming (OOP) concept in which one class acquires the properties and methods of another class. In Java, the most basic form of inheritance is Single Inheritance, where one child class inherits from one parent class.",

  tamilDefinition:
    "Inheritance என்பது ஒரு Object-Oriented Programming (OOP) கருத்தாகும். இதில் ஒரு Class, மற்றொரு Class-ன் Properties மற்றும் Methods-ஐ பெறுகிறது. Java-வில் இதன் அடிப்படை வடிவம் Single Inheritance ஆகும். இதில் ஒரு Child Class, ஒரு Parent Class-இலிருந்து மட்டுமே Inherit செய்கிறது.",

  realWorldUsage:
    "Developers use inheritance to reuse existing code. For example, a GraduateStudent class can inherit common details such as name and age from the Student class while adding its own specialization.",

  realWorldUsageTamil:
    "ஏற்கனவே எழுதப்பட்ட Code-ஐ மீண்டும் பயன்படுத்த Developers Inheritance-ஐ பயன்படுத்துகின்றனர். உதாரணமாக, GraduateStudent Class ஆனது Student Class-ல் உள்ள name மற்றும் age போன்ற தகவல்களை பெற்றுக்கொண்டு தனது சொந்த Specialization-ஐ சேர்க்க முடியும்.",

  syntax: `class ParentClass{

}

class ChildClass extends ParentClass{

}`,

  syntaxExplanationEnglish: [
    "ParentClass is the class whose properties and methods are inherited.",
    "extends is the keyword used to inherit another class.",
    "ChildClass inherits the variables and methods of ParentClass.",
    "This is called Single Inheritance because one child class inherits from one parent class."
  ],

  syntaxExplanationTamil: [
    "ParentClass என்பது அதன் Properties மற்றும் Methods மற்றொரு Class-க்கு வழங்கும் Class ஆகும்.",
    "extends என்பது மற்றொரு Class-ஐ Inherit செய்ய பயன்படும் Keyword ஆகும்.",
    "ChildClass, ParentClass-ன் Variables மற்றும் Methods-ஐ பெறுகிறது.",
    "ஒரு Child Class, ஒரு Parent Class-இலிருந்து மட்டும் Inherit செய்வதால் இது Single Inheritance எனப்படுகிறது."
  ],

  exampleProgram: `class Student{

    String name = "Deepak";
    int age = 20;

}

class GraduateStudent extends Student{

    String specialization = "Cyber Security";

}

public class Main{

    public static void main(String[] args){

        GraduateStudent student = new GraduateStudent();

        System.out.println("Name : " + student.name);
        System.out.println("Age : " + student.age);
        System.out.println("Specialization : " + student.specialization);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates the Student parent class.",
    "Lines 3-4: Declares the variables name and age.",
    "Line 8: Creates the GraduateStudent child class using the extends keyword.",
    "Line 10: Declares the specialization variable.",
    "Line 18: Creates an object of GraduateStudent.",
    "Lines 20-22: Accesses the inherited variables name and age from Student and the specialization variable from GraduateStudent.",
    "This is an example of Single Inheritance because one child class inherits from one parent class."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற Parent Class உருவாக்கப்படுகிறது.",
    "வரி 3-4: name மற்றும் age என்ற Variables அறிவிக்கப்படுகின்றன.",
    "வரி 8: extends Keyword-ஐ பயன்படுத்தி GraduateStudent என்ற Child Class உருவாக்கப்படுகிறது.",
    "வரி 10: specialization என்ற புதிய Variable அறிவிக்கப்படுகிறது.",
    "வரி 18: GraduateStudent Object உருவாக்கப்படுகிறது.",
    "வரி 20-22: Student Class-ல் இருந்து பெறப்பட்ட name மற்றும் age Variables-யும், GraduateStudent-ன் specialization Variable-யும் பயன்படுத்தப்படுகின்றன.",
    "ஒரு Child Class, ஒரு Parent Class-இலிருந்து மட்டும் Inherit செய்வதால் இது Single Inheritance ஆகும்."
  ],

  output: `Name : Deepak
Age : 20
Specialization : Cyber Security

💡 Note 
This example demonstrates Single Inheritance. Java also supports other inheritance types such as Multilevel and Hierarchical Inheritance. These will be discussed in the next topic.

💡 குறிப்பு 
இந்த Program Single Inheritance-ஐ விளக்குகிறது. Java-வில் Multilevel மற்றும் Hierarchical Inheritance போன்ற பிற வகைகளும் உள்ளன. அவற்றைப் பற்றி அடுத்த Topic-ல் பார்க்கலாம்.`,

  locked: true,

  completed: false
},
{
  id: 28,

  title: "Single Inheritance",

  englishDefinition:
    "Single Inheritance is a type of inheritance in which one child class inherits the properties and methods of one parent class.",

  tamilDefinition:
    "Single Inheritance என்பது ஒரு Child Class, ஒரு Parent Class-இலிருந்து மட்டும் Properties மற்றும் Methods-ஐ பெறும் Inheritance வகையாகும்.",

  realWorldUsage:
    "Developers use Single Inheritance to extend an existing class without rewriting common code. For example, a GraduateStudent class can inherit common student details from the Student class.",

  realWorldUsageTamil:
    "ஏற்கனவே உள்ள Class-ன் பொதுவான Code-ஐ மீண்டும் எழுதாமல் பயன்படுத்த Developers Single Inheritance-ஐ பயன்படுத்துகின்றனர். உதாரணமாக, GraduateStudent Class ஆனது Student Class-ல் உள்ள பொதுவான தகவல்களை பெற முடியும்.",

  syntax: `class ParentClass{

}

class ChildClass extends ParentClass{

}`,

  syntaxExplanationEnglish: [
    "ParentClass is the class whose properties and methods are inherited.",
    "extends is the keyword used to inherit another class.",
    "ChildClass inherits the variables and methods of ParentClass.",
    "Only one parent class is inherited in Single Inheritance."
  ],

  syntaxExplanationTamil: [
    "ParentClass என்பது அதன் Properties மற்றும் Methods மற்றொரு Class-க்கு வழங்கும் Class ஆகும்.",
    "extends என்பது மற்றொரு Class-ஐ Inherit செய்ய பயன்படும் Keyword ஆகும்.",
    "ChildClass, ParentClass-ன் Variables மற்றும் Methods-ஐ பெறுகிறது.",
    "Single Inheritance-ல் ஒரு Parent Class மட்டும் Inherit செய்யப்படும்."
  ],

  exampleProgram: `class Student{

    String name = "Deepak";
    int age = 20;

    void displayStudent(){

        System.out.println("Student Name : " + name);
        System.out.println("Age : " + age);

    }

}

class GraduateStudent extends Student{

    String specialization = "Cyber Security";

    void displaySpecialization(){

        System.out.println("Specialization : " + specialization);

    }

}

public class Main{

    public static void main(String[] args){

        GraduateStudent student = new GraduateStudent();

        student.displayStudent();

        student.displaySpecialization();

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates the Student parent class.",
    "Lines 3-4: Declares the variables name and age.",
    "Lines 6-11: Creates the displayStudent() method.",
    "Line 17: Creates the GraduateStudent child class using the extends keyword.",
    "Line 19: Declares the specialization variable.",
    "Lines 21-25: Creates the displaySpecialization() method.",
    "Line 33: Creates an object of GraduateStudent.",
    "Line 35: Calls the inherited displayStudent() method from the Student class.",
    "Line 37: Calls the displaySpecialization() method of the GraduateStudent class.",
    "The child class can access both its own members and the inherited members of the parent class."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற Parent Class உருவாக்கப்படுகிறது.",
    "வரி 3-4: name மற்றும் age என்ற Variables அறிவிக்கப்படுகின்றன.",
    "வரி 6-11: displayStudent() Method உருவாக்கப்படுகிறது.",
    "வரி 17: extends Keyword-ஐ பயன்படுத்தி GraduateStudent என்ற Child Class உருவாக்கப்படுகிறது.",
    "வரி 19: specialization என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 21-25: displaySpecialization() Method உருவாக்கப்படுகிறது.",
    "வரி 33: GraduateStudent Object உருவாக்கப்படுகிறது.",
    "வரி 35: Parent Class-ல் உள்ள displayStudent() Method அழைக்கப்படுகிறது.",
    "வரி 37: Child Class-ல் உள்ள displaySpecialization() Method அழைக்கப்படுகிறது.",
    "Child Class தனது சொந்த உறுப்பினர்களையும் (Members), Parent Class-ல் இருந்து பெறப்பட்ட உறுப்பினர்களையும் பயன்படுத்த முடியும்."
  ],

  output: `Student Name : Deepak
Age : 20
Specialization : Cyber Security

💡 Note (English)
In Single Inheritance, one child class inherits the properties and methods of only one parent class. This improves code reusability and reduces code duplication.

💡 குறிப்பு (Tamil)
Single Inheritance-ல் ஒரு Child Class, ஒரு Parent Class-இலிருந்து மட்டுமே Properties மற்றும் Methods-ஐ பெறுகிறது. இதனால் ஒரே Code-ஐ மீண்டும் எழுத வேண்டிய அவசியம் குறைகிறது மற்றும் Code Reusability அதிகரிக்கிறது.`,

  locked: true,

  completed: false
},
{
  id: 29,

  title: "Multilevel Inheritance",

  englishDefinition:
    "Multilevel Inheritance is a type of inheritance in which one class inherits from another class, and another class further inherits from it. This forms a chain of inheritance.",

  tamilDefinition:
    "Multilevel Inheritance என்பது ஒரு Class மற்றொரு Class-இலிருந்து Inherit செய்து, அதிலிருந்து மற்றொரு Class மீண்டும் Inherit செய்வது ஆகும். இதனால் ஒரு Inheritance Chain உருவாகிறது.",

  realWorldUsage:
    "Developers use Multilevel Inheritance to build applications with multiple levels of specialization. For example, a GraduateStudent can inherit common student details, and a ResearchStudent can further inherit graduate student features.",

  realWorldUsageTamil:
    "பல நிலைகளில் (Multiple Levels) தனிப்பட்ட அம்சங்களை உருவாக்க Developers Multilevel Inheritance-ஐ பயன்படுத்துகின்றனர். உதாரணமாக, GraduateStudent என்பது Student-இலிருந்து தகவல்களை பெறும்; ResearchStudent என்பது GraduateStudent-இலிருந்து மேலும் தகவல்களை பெறும்.",

  syntax: `class ParentClass{

}

class ChildClass extends ParentClass{

}

class GrandChildClass extends ChildClass{

}`,

  syntaxExplanationEnglish: [
    "ParentClass is the base class.",
    "ChildClass inherits the properties and methods of ParentClass.",
    "GrandChildClass inherits the properties and methods of ChildClass.",
    "This creates a chain of inheritance known as Multilevel Inheritance."
  ],

  syntaxExplanationTamil: [
    "ParentClass என்பது அடிப்படை (Base) Class ஆகும்.",
    "ChildClass, ParentClass-ன் Properties மற்றும் Methods-ஐ பெறுகிறது.",
    "GrandChildClass, ChildClass-ன் Properties மற்றும் Methods-ஐ பெறுகிறது.",
    "இந்த தொடர் (Chain) அமைப்பு Multilevel Inheritance எனப்படுகிறது."
  ],

  exampleProgram: `class Student{

    String name = "Deepak";

}

class GraduateStudent extends Student{

    String specialization = "Cyber Security";

}

class ResearchStudent extends GraduateStudent{

    String researchTopic = "Network Security";

}

public class Main{

    public static void main(String[] args){

        ResearchStudent student = new ResearchStudent();

        System.out.println("Name : " + student.name);
        System.out.println("Specialization : " + student.specialization);
        System.out.println("Research Topic : " + student.researchTopic);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates the Student parent class.",
    "Line 3: Declares the name variable.",
    "Line 7: GraduateStudent inherits from Student.",
    "Line 9: Declares the specialization variable.",
    "Line 13: ResearchStudent inherits from GraduateStudent.",
    "Line 15: Declares the researchTopic variable.",
    "Line 23: Creates a ResearchStudent object.",
    "Lines 25-27: Accesses variables inherited from Student, GraduateStudent, and ResearchStudent.",
    "ResearchStudent can access members from all the classes in the inheritance chain."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற Parent Class உருவாக்கப்படுகிறது.",
    "வரி 3: name என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 7: GraduateStudent, Student Class-இலிருந்து Inherit செய்கிறது.",
    "வரி 9: specialization என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 13: ResearchStudent, GraduateStudent Class-இலிருந்து Inherit செய்கிறது.",
    "வரி 15: researchTopic என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 23: ResearchStudent Object உருவாக்கப்படுகிறது.",
    "வரி 25-27: Student, GraduateStudent மற்றும் ResearchStudent Classes-ல் உள்ள Variables அனைத்தும் பயன்படுத்தப்படுகின்றன.",
    "ResearchStudent, Inheritance Chain-ல் உள்ள அனைத்து Classes-ன் உறுப்பினர்களையும் (Members) அணுக முடியும்."
  ],

  output: `Name : Deepak
Specialization : Cyber Security
Research Topic : Network Security

💡 Note 
In Multilevel Inheritance, one class inherits from another class, which itself inherits from another class. This creates a chain of inheritance and allows the last class to access the features of all its parent classes.

💡 குறிப்பு 
Multilevel Inheritance-ல் ஒரு Class மற்றொரு Class-இலிருந்து Inherit செய்து, அந்த Class மீண்டும் மற்றொரு Class-இலிருந்து Inherit செய்கிறது. இதனால் ஒரு Inheritance Chain உருவாகிறது. கடைசி Child Class, அதற்கு முந்தைய அனைத்து Parent Classes-ன் அம்சங்களையும் பயன்படுத்த முடியும்.`,

  locked: true,

  completed: false
},
{
  id: 30,

  title: "Hierarchical Inheritance",

  englishDefinition:
    "Hierarchical Inheritance is a type of inheritance in which multiple child classes inherit the properties and methods of a single parent class.",

  tamilDefinition:
    "Hierarchical Inheritance என்பது ஒரு Parent Class-இலிருந்து பல Child Classes Properties மற்றும் Methods-ஐ பெறும் Inheritance வகையாகும்.",

  realWorldUsage:
    "Developers use Hierarchical Inheritance when multiple classes share common features from a single parent class. For example, GraduateStudent and UndergraduateStudent can both inherit common student details from the Student class.",

  realWorldUsageTamil:
    "பல Classes ஒரே Parent Class-ன் பொதுவான அம்சங்களை (Common Features) பயன்படுத்த வேண்டிய சூழலில் Developers Hierarchical Inheritance-ஐ பயன்படுத்துகின்றனர். உதாரணமாக, GraduateStudent மற்றும் UndergraduateStudent ஆகிய இரண்டும் Student Class-இலிருந்து பொதுவான தகவல்களை பெறுகின்றன.",

  syntax: `class ParentClass{

}

class ChildClass1 extends ParentClass{

}

class ChildClass2 extends ParentClass{

}`,

  syntaxExplanationEnglish: [
    "ParentClass is the common base class.",
    "ChildClass1 inherits the properties and methods of ParentClass.",
    "ChildClass2 also inherits the properties and methods of ParentClass.",
    "Multiple child classes inherit from the same parent class."
  ],

  syntaxExplanationTamil: [
    "ParentClass என்பது பொதுவான (Common) Base Class ஆகும்.",
    "ChildClass1, ParentClass-ன் Properties மற்றும் Methods-ஐ பெறுகிறது.",
    "ChildClass2-மும் ParentClass-ன் Properties மற்றும் Methods-ஐ பெறுகிறது.",
    "பல Child Classes ஒரே Parent Class-இலிருந்து Inherit செய்வதால் இது Hierarchical Inheritance எனப்படுகிறது."
  ],

  exampleProgram: `class Student{

    String name = "Deepak";

}

class GraduateStudent extends Student{

    String specialization = "Cyber Security";

}

class UndergraduateStudent extends Student{

    int semester = 3;

}

public class Main{

    public static void main(String[] args){

        GraduateStudent graduate = new GraduateStudent();

        UndergraduateStudent undergraduate = new UndergraduateStudent();

        System.out.println("Graduate Student");
        System.out.println("Name : " + graduate.name);
        System.out.println("Specialization : " + graduate.specialization);

        System.out.println();

        System.out.println("Undergraduate Student");
        System.out.println("Name : " + undergraduate.name);
        System.out.println("Semester : " + undergraduate.semester);

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates the Student parent class.",
    "Line 3: Declares the name variable.",
    "Line 7: Creates the GraduateStudent child class.",
    "Line 9: Declares the specialization variable.",
    "Line 13: Creates the UndergraduateStudent child class.",
    "Line 15: Declares the semester variable.",
    "Lines 23-25: Creates objects for both child classes.",
    "Lines 27-34: Displays the inherited name variable along with each child class's own variable.",
    "Both child classes inherit the common features of the Student class."
  ],

  programExplanationTamil: [
    "வரி 1: Student என்ற Parent Class உருவாக்கப்படுகிறது.",
    "வரி 3: name என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 7: GraduateStudent என்ற Child Class உருவாக்கப்படுகிறது.",
    "வரி 9: specialization என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 13: UndergraduateStudent என்ற Child Class உருவாக்கப்படுகிறது.",
    "வரி 15: semester என்ற Variable அறிவிக்கப்படுகிறது.",
    "வரி 23-25: இரண்டு Child Classes-க்கும் Objects உருவாக்கப்படுகின்றன.",
    "வரி 27-34: Parent Class-ல் இருந்து பெறப்பட்ட name Variable மற்றும் ஒவ்வொரு Child Class-ன் தனிப்பட்ட Variable-களும் காட்டப்படுகின்றன.",
    "இரண்டு Child Classes-மும் Student Class-ன் பொதுவான அம்சங்களை பயன்படுத்துகின்றன."
  ],

  output: `Graduate Student
Name : Deepak
Specialization : Cyber Security

Undergraduate Student
Name : Deepak
Semester : 3

💡 Note 
In Hierarchical Inheritance, multiple child classes inherit the properties and methods of the same parent class. Each child class can also have its own unique variables and methods.

💡 குறிப்பு 
Hierarchical Inheritance-ல் பல Child Classes ஒரே Parent Class-இலிருந்து Properties மற்றும் Methods-ஐ பெறுகின்றன. ஒவ்வொரு Child Class-மும் தனது சொந்த Variables மற்றும் Methods-ஐ கூட கொண்டிருக்கலாம்.`,

  locked: true,

  completed: false
},
{
  id: 31,

  title: "Multiple Inheritance",

  englishDefinition:
    "Multiple Inheritance is a type of inheritance in which one child class inherits the properties and methods of more than one parent class. Java does not support Multiple Inheritance using classes, but it can be achieved using interfaces.",

  tamilDefinition:
    "Multiple Inheritance என்பது ஒரு Child Class, ஒன்றுக்கும் மேற்பட்ட Parent Classes-இலிருந்து Properties மற்றும் Methods-ஐ பெறும் Inheritance வகையாகும். Java-வில் Classes மூலம் Multiple Inheritance ஆதரிக்கப்படாது. ஆனால் Interfaces மூலம் இதை செயல்படுத்த முடியும்.",

  realWorldUsage:
    "Developers use Multiple Inheritance when a class needs the features of multiple sources. In Java, this is achieved using interfaces instead of classes.",

  realWorldUsageTamil:
    "ஒரு Class-க்கு பல Parent Sources-ன் அம்சங்கள் தேவைப்படும் போது Developers Multiple Inheritance-ஐ பயன்படுத்துகின்றனர். Java-வில் இது Classes மூலம் அல்ல, Interfaces மூலம் செயல்படுத்தப்படுகிறது.",

  syntax: `interface Parent1{

}

interface Parent2{

}

class ChildClass implements Parent1, Parent2{

}`,

  syntaxExplanationEnglish: [
    "Parent1 and Parent2 are interfaces.",
    "implements is the keyword used to implement interfaces.",
    "A class can implement multiple interfaces in Java.",
    "Java does not allow a class to extend multiple classes."
  ],

  syntaxExplanationTamil: [
    "Parent1 மற்றும் Parent2 ஆகியவை Interfaces ஆகும்.",
    "implements என்பது Interface-ஐ செயல்படுத்த (Implement) பயன்படும் Keyword ஆகும்.",
    "ஒரு Class பல Interfaces-ஐ Implement செய்ய முடியும்.",
    "Java-வில் ஒரு Class பல Classes-ஐ Extend செய்ய அனுமதிக்கப்படாது."
  ],

  exampleProgram: `interface Sports{

    void play();

}

interface Cultural{

    void dance();

}

class Student implements Sports, Cultural{

    public void play(){

        System.out.println("Playing Football");

    }

    public void dance(){

        System.out.println("Performing Cultural Dance");

    }

}

public class Main{

    public static void main(String[] args){

        Student student = new Student();

        student.play();
        student.dance();

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates the Sports interface.",
    "Line 3: Declares the play() method.",
    "Line 7: Creates the Cultural interface.",
    "Line 9: Declares the dance() method.",
    "Line 13: Student implements both interfaces using the implements keyword.",
    "Lines 15-27: Provides implementations for both interface methods.",
    "Line 35: Creates a Student object.",
    "Lines 37-38: Calls methods from both interfaces.",
    "This demonstrates Multiple Inheritance in Java using interfaces."
  ],

  programExplanationTamil: [
    "வரி 1: Sports என்ற Interface உருவாக்கப்படுகிறது.",
    "வரி 3: play() Method அறிவிக்கப்படுகிறது.",
    "வரி 7: Cultural என்ற Interface உருவாக்கப்படுகிறது.",
    "வரி 9: dance() Method அறிவிக்கப்படுகிறது.",
    "வரி 13: Student Class, implements Keyword மூலம் இரண்டு Interfaces-ஐ செயல்படுத்துகிறது.",
    "வரி 15-27: இரண்டு Interface Methods-க்கும் செயல்பாடு (Implementation) வழங்கப்படுகிறது.",
    "வரி 35: Student Object உருவாக்கப்படுகிறது.",
    "வரி 37-38: இரண்டு Interfaces-ன் Methods-உம் அழைக்கப்படுகின்றன.",
    "இதன் மூலம் Java-வில் Interfaces பயன்படுத்தி Multiple Inheritance செயல்படுத்தப்படுவது காட்டப்படுகிறது."
  ],

  output: `Playing Football
Performing Cultural Dance

💡 Note 
Java does not support Multiple Inheritance using classes because it can create ambiguity (Diamond Problem). Instead, Java allows a class to implement multiple interfaces.

💡 குறிப்பு
Java-வில் Classes மூலம் Multiple Inheritance ஆதரிக்கப்படாது. ஏனெனில் அது Diamond Problem போன்ற குழப்பங்களை ஏற்படுத்தும். அதற்கு பதிலாக Java, ஒரு Class பல Interfaces-ஐ Implement செய்ய அனுமதிக்கிறது.`,

  locked: true,

  completed: false
},
{
  id: 32,

  title: "Hybrid Inheritance",

  englishDefinition:
    "Hybrid Inheritance is a type of inheritance that combines two or more types of inheritance, such as Single, Multilevel, and Hierarchical Inheritance. Java does not support Hybrid Inheritance using classes, but it can be achieved using interfaces.",

  tamilDefinition:
    "Hybrid Inheritance என்பது இரண்டு அல்லது அதற்கு மேற்பட்ட Inheritance வகைகளை (Single, Multilevel, Hierarchical போன்றவை) இணைத்து உருவாக்கப்படும் Inheritance வகையாகும். Java-வில் Classes மூலம் Hybrid Inheritance ஆதரிக்கப்படாது. ஆனால் Interfaces மூலம் இதை செயல்படுத்த முடியும்.",

  realWorldUsage:
    "Developers use Hybrid Inheritance in large applications where a class needs features from different inheritance structures. In Java, this is implemented using interfaces.",

  realWorldUsageTamil:
    "பெரிய Software Applications-ல் ஒரு Class-க்கு பல Inheritance அமைப்புகளின் (Inheritance Structures) அம்சங்கள் தேவைப்படும் போது Developers Hybrid Inheritance-ஐ பயன்படுத்துகின்றனர். Java-வில் இது Interfaces மூலம் செயல்படுத்தப்படுகிறது.",

  syntax: `interface Parent1{

}

interface Parent2{

}

class ChildClass implements Parent1, Parent2{

}`,

  syntaxExplanationEnglish: [
    "Parent1 and Parent2 are interfaces.",
    "implements is the keyword used to implement interfaces.",
    "A class can implement multiple interfaces.",
    "Hybrid Inheritance is achieved in Java using interfaces."
  ],

  syntaxExplanationTamil: [
    "Parent1 மற்றும் Parent2 ஆகியவை Interfaces ஆகும்.",
    "implements என்பது Interface-ஐ செயல்படுத்த பயன்படும் Keyword ஆகும்.",
    "ஒரு Class பல Interfaces-ஐ Implement செய்ய முடியும்.",
    "Java-வில் Hybrid Inheritance Interfaces மூலம் செயல்படுத்தப்படுகிறது."
  ],

  exampleProgram: `interface Sports{

    void play();

}

interface Cultural{

    void dance();

}

class Student{

    void display(){

        System.out.println("Student Details");

    }

}

class GraduateStudent extends Student implements Sports, Cultural{

    public void play(){

        System.out.println("Playing Football");

    }

    public void dance(){

        System.out.println("Performing Cultural Dance");

    }

}

public class Main{

    public static void main(String[] args){

        GraduateStudent student = new GraduateStudent();

        student.display();
        student.play();
        student.dance();

    }

}`,

  programExplanationEnglish: [
    "Line 1: Creates the Sports interface.",
    "Line 7: Creates the Cultural interface.",
    "Line 13: Creates the Student class.",
    "Lines 15-19: Defines the display() method.",
    "Line 23: GraduateStudent extends Student and implements Sports and Cultural interfaces.",
    "Lines 25-37: Implements the play() and dance() methods.",
    "Line 45: Creates a GraduateStudent object.",
    "Lines 47-49: Calls methods inherited from the Student class and implemented from both interfaces.",
    "This demonstrates Hybrid Inheritance in Java using interfaces."
  ],

  programExplanationTamil: [
    "வரி 1: Sports என்ற Interface உருவாக்கப்படுகிறது.",
    "வரி 7: Cultural என்ற Interface உருவாக்கப்படுகிறது.",
    "வரி 13: Student என்ற Class உருவாக்கப்படுகிறது.",
    "வரி 15-19: display() Method உருவாக்கப்படுகிறது.",
    "வரி 23: GraduateStudent, Student Class-ஐ Extend செய்து Sports மற்றும் Cultural Interfaces-ஐ Implement செய்கிறது.",
    "வரி 25-37: play() மற்றும் dance() Methods-க்கு செயல்பாடு வழங்கப்படுகிறது.",
    "வரி 45: GraduateStudent Object உருவாக்கப்படுகிறது.",
    "வரி 47-49: Student Class-ன் Method மற்றும் இரண்டு Interfaces-ன் Methods அழைக்கப்படுகின்றன.",
    "இதன் மூலம் Java-வில் Interfaces பயன்படுத்தி Hybrid Inheritance செயல்படுத்தப்படுவது காட்டப்படுகிறது."
  ],

  output: `Student Details
Playing Football
Performing Cultural Dance

💡 Note 
Java does not support Hybrid Inheritance using classes because it may create ambiguity. Hybrid Inheritance can be implemented in Java by combining class inheritance with multiple interfaces.

💡 குறிப்பு (Tamil)
Java-வில் Classes மூலம் Hybrid Inheritance ஆதரிக்கப்படாது. ஏனெனில் அது குழப்பங்களை (Ambiguity) ஏற்படுத்தும். ஆனால் ஒரு Class-ஐ Extend செய்து, பல Interfaces-ஐ Implement செய்வதன் மூலம் Hybrid Inheritance-ஐ Java-வில் செயல்படுத்த முடியும்.`,

  locked: true,

  completed: false
},










  {
    id: 28,
    title: "Exception Handling",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 29,
    title: "Try Catch",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 30,
    title: "Finally",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
  {
    id: 31,
    title: "Throw",
    englishDefinition: "",
    tamilDefinition: "",
    realWorldUsage: "",
    locked: true,
    completed: false,
  },
];

export default topics;