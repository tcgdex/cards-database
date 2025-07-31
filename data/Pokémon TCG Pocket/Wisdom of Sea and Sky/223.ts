import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Females are more sensitive to smells than males.\nWhile foraging, they'll use their whiskers to check\nwind direction and stay downwind of predators."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Darkness"],

		effect: {
			en: "Put 1 random Nidoran♂ from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card