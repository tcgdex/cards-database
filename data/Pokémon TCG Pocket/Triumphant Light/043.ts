import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Meditite"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It never skips its daily yoga training. It heightens<br />its inner strength through meditation."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Kick"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card