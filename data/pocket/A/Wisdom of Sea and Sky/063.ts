import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Swanna",
		'fr-fr': "Lakmécygne"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [581],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Ducklett"
	},

	description: {
		'en-us': "Despite their elegant appearance, they can flap\ntheir wings strongly and fly for thousands of miles.",
		'fr-fr': "Un Pokémon gracieux, mais aussi robuste. Il peut voler des milliers de kilomètres grâce à ses ailes puissantes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Feathery Cyclone",
			'fr-fr': "Cyclone de Plumes"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez toute l'Énergie de ce Pokémon vers un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card