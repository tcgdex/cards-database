import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It loves to bite and yank people's hair from\nbehind without warning, just to see their\nshocked reactions."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Lead"
		},

		cost: ["Psychic"],

		effect: {
			en: "Put a random Supporter card from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card