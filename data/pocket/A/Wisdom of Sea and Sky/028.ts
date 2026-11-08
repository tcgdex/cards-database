import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [156],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Cyndaquil"
	},

	description: {
		'en-us': "Before battle, it turns its back on its opponent to\ndemonstrate how ferociously its fire blazes.",
		'fr-fr': "Avant chaque combat, il tourne le dos à l'adversaire pour lui montrer ses flammes dans toute leur splendeur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card