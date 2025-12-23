import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Shellder"
	},

	illustrator: "whomor Inc.",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "It is encased in a shell that is harder than diamond.\nInside, however, it is surprisingly tender."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card