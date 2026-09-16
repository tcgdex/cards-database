import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Yuu Nishida",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	attacks: [{
		name: {
			en: "Energized Tail"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Pika Punch"
		},

		cost: ["Lightning", "Colorless"],

		damage: 30,
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
				cardmarket: 907644,
				tcgplayer: 696681
			}
		}
	],
}

export default card
