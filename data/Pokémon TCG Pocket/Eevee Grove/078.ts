import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Narumi Sato",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card