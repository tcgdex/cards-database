import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sudowoodo"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		en: "To avoid being attacked, it does nothing but\nmimic a tree. It hates water and flees from rain."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fight Back"
		},

		damage: 30,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card