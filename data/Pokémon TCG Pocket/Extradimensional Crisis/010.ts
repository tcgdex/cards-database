import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		en: "If it builds up enough speed swimming, it\ncan jump out above the waves and glide\nfor over 300 feet."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surf"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card