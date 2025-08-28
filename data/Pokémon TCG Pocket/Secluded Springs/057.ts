import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "If this Pokémon's sticky saliva gets on you and\nyou don't clean it off, an intense itch will set in.\nThe itch won't go away, either."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stretch Tongue"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card