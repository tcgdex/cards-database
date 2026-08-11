import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [552],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Sandile"
	},

	description: {
		'en-us': "Protected by thin membranes, their eyes can see\neven in the dead of night. They live in groups of\na few individuals.",
		'fr-fr': "Leurs yeux sont recouverts d'une fine membrane qui leur permet de voir dans la nuit noire. Ils vivent en petites bandes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card