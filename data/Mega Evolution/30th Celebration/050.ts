import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Shimaris Yukichi",
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
			en: "Satisfied Spark"
		},

		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		damage: 100,
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
				cardmarket: 907657,
				tcgplayer: 712950
			}
		}
	],
}

export default card
