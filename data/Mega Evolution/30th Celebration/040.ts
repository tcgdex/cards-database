import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Shinji Kanda",
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
			en: "Overwriting Bolt"
		},

		cost: ["Lightning"],

		damage: 10,

		effect: {
			en: "The Defending Pokémon's Weakness is now Lightning until the end of your next turn. (Apply Weakness as ×2.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907647,
				tcgplayer: 712944
			}
		}
	],
}

export default card
