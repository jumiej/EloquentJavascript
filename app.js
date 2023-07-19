///just trying class up here.... Nothing to review here///

class FamilyAsset {
    constructor(assetName) {
        this.assetName = assetName;
    }
}

class Persona extends FamilyAsset {
    constructor(assetName, age, name) {
        super(assetName)
        this.age = age;
        this.name = name;
    }
}

const person = new Persona('car', 12, 'jumie')

console.log(person)