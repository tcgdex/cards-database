import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Ferroseed",
		fr: "Grindur"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "It absorbs the iron it finds in the rock while clinging\nto the ceiling. It shoots spikes when in danger.",
		fr: "Il s'accroche aux parois des grottes et en absorbe les minéraux. Il projette ses épines en cas de danger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spike Sting",
			fr: "Pic Piquant"
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