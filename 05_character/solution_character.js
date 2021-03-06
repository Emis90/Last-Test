/* eslint-disable no-unused-vars */
class Character {
    constructor(character, fontName, fontSize) {
        this.character = character;
        this.fontName = fontName;
        this.fontSize = fontSize
    }
    drawCharacter() {
        return this.character
    }
}

class Letter extends Character {
    constructor(character, fontName, fontSize, charCase) {
        super(character, fontName, fontSize, charCase) 
        this.charCase = charCase;
    }

    toLowerCase() {
       this.charCase = 'lowerCase';
       this.character = this.character.toLowerCase()
    }
    toUpperCase() {
       this.charCase = 'upperCase'
       this.character = this.character.toUpperCase();
    }
    getCase() {
       return this.charCase;
    }
    // integerValue() {
    //    this.fontSize = Number(this.fontSize);
    // }
}
class Digit extends Character {
    constructor(character, fontName, fontSize) {
      super(character, fontName, fontSize)
    }
     integerValue() {
       this.character = Number(this.character);
    }
}