import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino"
	},

	illustrator: "Naoki Saito",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [214],
	hp: 90,
	types: ["Grass"],

	description: {
		'en-us': "It loves sweet nectar. To keep all the nectar to\nitself, it hurls rivals away with its prized horn.",
		'fr-fr': "Il aime tellement la sève qu'il la défend jalousement : à l'aide de son imposante corne, il projette quiconque s'en approche dans les airs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Single Lunge",
			'fr-fr': "Allongement Simple"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "If this Pokémon has no damage on it, this attack does 40 more damage.",
			'fr-fr': "Si ce Pokémon n'a subi aucun dégât, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card