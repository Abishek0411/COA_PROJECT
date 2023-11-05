var selectedOperation = "";

function selectOperation(operation) {
    selectedOperation = operation;
}

function execute() {
    // Get input values
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
 
    // Parse input values as integers
    var num1 = parseInt(input1, 2);
    var num2 = parseInt(input2, 2);
 
    // Processing steps
    var processingOutput = document.getElementById("processing-output");
    processingOutput.innerHTML = "<p><strong>Processing:</strong></p>";

    // Perform arithmetic operation based on selectedOperation
    var result;
    switch (selectedOperation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operation";
    }

    // Display processing steps and memory content
    var processingOutput = document.getElementById("processing-output");
    var memoryOutput = document.getElementById("memory-output");

    // Processing steps (as per the selected operation)
    var operationText = selectedOperation.charAt(0).toUpperCase() + selectedOperation.slice(1);
    processingOutput.innerHTML = "<p>1. Loading data from Memory to Registers</p>";
    processingOutput.innerHTML += "<p>2. " + operationText + " the contents of Registers</p>";
    processingOutput.innerHTML += "<p>3. Storing the Result in Memory</p>";

    // Display memory content in output
    memoryOutput.innerHTML = "<p><strong>Memory Content:</strong></p>";
    memoryOutput.innerHTML += "<p>Memory Address 00000: " + pad(input1, 8) + " (" + num1 + ")</p>";
    memoryOutput.innerHTML += "<p>Memory Address 00001: " + pad(input2, 8) + " (" + num2 + ")</p>";
    memoryOutput.innerHTML += "<p>Memory Address 00002: " + pad(result.toString(2), 8) + " (" + result + ")</p>";
}

// Function to pad binary numbers with leading zeros
function pad(num, size) {
    var s = num;
    while (s.length < size) s = "0" + s;
    return s;
}
function displayInformation() {
    var opcodeInfo = document.getElementById("opcode-info");
    var operandInfo = document.getElementById("operand-info");

    // Opcode information
    opcodeInfo.innerHTML = `
        <p><strong>Opcodes (3 bits):</strong></p>
        <p>000: Load data from memory to register</p>
        <p>001: Store data from register to memory</p>
        <p>010: Add register to register and store the result in a register</p>
        <p>011: Subtract register from register and store the result in a register</p>
        <p>100: Jump if two registers are equal</p>
        <p>101: Jump if a register is zero</p>
        <p>110: Halt the machine</p>
        <p>111: No operation (NOP)</p>
    `;

    // Operand information
    operandInfo.innerHTML = `
        <p><strong>Operands (5 bits):</strong></p>
        <p>Registers: 00000 to 11111 (5 bits for register addressing)</p>
        <p>Memory Addresses: 00000 to 11111 (5 bits for memory addressing)</p>
    `;
}

// Call the displayInformation function when the page loads
window.onload = displayInformation;