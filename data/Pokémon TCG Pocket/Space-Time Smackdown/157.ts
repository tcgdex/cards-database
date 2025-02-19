import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Combee"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "At night, Combee sleep in a group of about a hundred, packed closely together in a lump."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put 1 random  from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
