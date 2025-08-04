import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrogue"
	},

	illustrator: "Mina Nakai",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],

	description: {
		en: "It is always bursting with energy. To make itself\nstronger, it keeps on fighting even if it loses."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slappy Knuckle"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card