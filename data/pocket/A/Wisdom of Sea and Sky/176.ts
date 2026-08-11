import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [207],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It usually clings to cliffs. When it spots its prey,\nit spreads its wings and glides down to attack.",
		'fr-fr': "Il s'accroche souvent aux falaises. Sa proie repérée, il plane vers elle pour l'attaquer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card