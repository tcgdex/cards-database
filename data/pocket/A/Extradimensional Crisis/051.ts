import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [597],
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "It absorbs the iron it finds in the rock while clinging\nto the ceiling. It shoots spikes when in danger.",
		'fr-fr': "Il s'accroche aux parois des grottes et en absorbe les minéraux. Il projette ses épines en cas de danger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spike Sting",
			'fr-fr': "Pic Piquant"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card