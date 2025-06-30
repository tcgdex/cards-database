import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Minccino"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "The way it brushes away grime with its tail\ncan be helpful when cleaning. But its focus on\nspotlessness can make cleaning more of a hassle."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card