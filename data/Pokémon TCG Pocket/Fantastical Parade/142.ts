import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tandemaus"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		en: "The pair sticks together no matter what. They\nsplit any food they find exactly in half and then\neat it together."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flock"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put 3 random cards from among Tandemaus and Maushold from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card