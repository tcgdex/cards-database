import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Dugtrio ex",
		'fr-fr': "Triopikeur d'Alola-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [51],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Alolan Diglett"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Triplet Headbutt",
			'fr-fr': "Triple Coup d'Boule"
		},

		damage: 60,
		cost: ["Metal", "Colorless"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card