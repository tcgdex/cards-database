import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magnemite"
	},

	description: {
		en: "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Lightning Ball"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
