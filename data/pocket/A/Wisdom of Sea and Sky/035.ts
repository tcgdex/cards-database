import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [554],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "It derives its power from fire burning inside\nits body. If the fire dwindles, this Pokémon will\nimmediately fall asleep.",
		'fr-fr': "La flamme qui brûle dans son corps est sa source d'énergie. Si le feu s'affaiblit, il s'endort sur-le-champ."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flop",
			'fr-fr': "Flop"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card