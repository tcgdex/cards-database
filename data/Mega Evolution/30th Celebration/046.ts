import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "svlt",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	attacks: [{
		name: {
			en: "Get Some Air"
		},

		cost: ["Colorless"],

		effect: {
			en: "This Pokémon recovers from all Special Conditions."
		}
	}, {
		name: {
			en: "Smash Kick"
		},

		cost: ["Colorless", "Colorless"],

		damage: 20,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907653,
				tcgplayer: 716315
			}
		}
	],
}

export default card
