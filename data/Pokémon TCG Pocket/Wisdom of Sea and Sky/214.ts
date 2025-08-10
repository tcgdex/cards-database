import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "An underpowered, pathetic Pokémon. It may\njump high on rare occasions but never more\nthan seven feet."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leap Out"
		},

		cost: ["Water"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card