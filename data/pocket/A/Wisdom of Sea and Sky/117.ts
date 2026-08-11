import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [228],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "It is smart enough to hunt in packs. It uses a\nvariety of cries for communicating with others.",
		'fr-fr': "Ce Pokémon est rusé. Il chasse en meute en communiquant avec les siens grâce à une variété de cris."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card