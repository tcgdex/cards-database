import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wishiwashi"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Water"],

		effect: {
			en: "Put 1 random Wishiwashi or Wishiwashi ex from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card