function printTextBox(text) {
    const length = text.length + 4;

    // Toon de bovenste rand van de text-box
    console.log("/" + "*".repeat(length) + "\\");

    // Toon de tekst in het tekstvak met de zijranden
    console.log("| " + text + " |");

    // Toon de onderste rand van de text-box
    console.log("\\" + "*".repeat(length) + "/");
}

printTextBox("HELLO WORLD");
printTextBox("HALLO WERELD");
printTextBox("HOLA MUNDO");