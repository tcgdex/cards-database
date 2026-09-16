import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Cherubi"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [420],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	description: {
		en: "It nimbly dashes about to avoid getting pecked by bird Pokémon that would love to make off with its small, nutrient-rich storage ball."
	},

	attacks: [{
		name: {
			en: "Hide"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
		}
	}, {
		name: {
			en: "Flop"
		},

		cost: ["Grass"],

		damage: 10,
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907612,
				tcgplayer: 716440
			}
		}
	],
}

export default card
