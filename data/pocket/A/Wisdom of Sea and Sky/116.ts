import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [461],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Sneasel"
	},

	description: {
		'en-us': "Evolution made it even more devious.\nIt communicates by clawing signs in boulders.",
		'fr-fr': "L'évolution l'a rendu encore plus retors. Il communique en gravant des marques dans les pierres avec ses griffes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card