import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Akira Komayama",
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
			en: "Charge-Up Dash"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin until you get tails. Search your deck for an amount of Basic Lightning Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Pika Bolt"
		},

		cost: ["Lightning", "Lightning", "Colorless"],

		damage: 50,
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
				cardmarket: 907649,
				tcgplayer: 712946
			}
		}
	],
}

export default card
