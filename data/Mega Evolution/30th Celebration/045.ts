import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
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
			en: "Nighttime Stroll"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw a card."
		}
	}, {
		name: {
			en: "Static Shock"
		},

		cost: ["Lightning", "Colorless"],

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
				cardmarket: 907652,
				tcgplayer: 716314
			}
		}
	],
}

export default card
