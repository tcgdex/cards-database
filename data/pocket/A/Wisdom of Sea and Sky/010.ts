import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meganium",
		'fr-fr': "Méganium"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [154],
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Bayleef"
	},

	description: {
		'en-us': "The aroma that rises from its petals contains a\nsubstance that calms aggressive feelings.",
		'fr-fr': "L'arôme qui émane de ses pétales contient une substance qui calme les pulsions agressives."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Bloomshine",
			'fr-fr': "Éclobrillance"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "Heal 20 damage from each of your Pokémon.",
			'fr-fr': "Soignez 20 dégâts de chacun de vos Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lugia"]
}

export default card