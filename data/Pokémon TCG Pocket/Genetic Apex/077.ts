import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Splash"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
	}
}

export default card
