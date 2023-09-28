// The Word Translator

//  Usage: Use simple conditional statements

// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

// Hello World translated in French is: Bonjour le monde


let lang = prompt('Enter your language code')

if (lang === 'es') {
    document.write('Hola Mundo')
}

else if (lang === 'de') {
    document.write('Hallo Welt')
}

else if (lang === 'en') {
    document.write('Hello World')
}

else if (lang === 'fr') {
    document.write('Bonjour le monde')
}

else {
    document.write('You did not enter a valid language code')
}