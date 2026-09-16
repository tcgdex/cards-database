import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "USGMEN",
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
			en: "Pika Chain"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: "40×",

		effect: {
			en: "This attack does 40 damage for each of your Pikachu and Pikachu ex in play."
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
				cardmarket: 907641,
				tcgplayer: 712941
			}
		}
	],
}

export default card
