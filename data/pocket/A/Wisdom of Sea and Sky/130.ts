import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [22],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Spearow"
	},

	description: {
		'en-us': "Carrying food through Fearow's territory is\ndangerous. It will snatch the food away from\nyou in a flash!",
		'fr-fr': "Si vous vous promenez sur le territoire d'un Rapasdepic en transportant de la nourriture, vous risquez de vite la voir s'envoler !"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Peck Bugs",
			'fr-fr': "Picore Insectes"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {G}, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card