import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Put 1 random Nidoran♂ from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Females are more sensitive to smells than males. While foraging, they'll use their whiskers to check wind direction and stay downwind of predators.",
	}
}

export default card
