import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Nurikabe",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	attacks: [{
		name: {
			en: "Fighting Lightning"
		},

		cost: ["Lightning", "Colorless", "Colorless"],

		damage: "20+",

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907656,
				tcgplayer: 712949
			}
		}
	],
}

export default card
