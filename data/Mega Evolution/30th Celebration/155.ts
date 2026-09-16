import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Jirachi"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [385],
	hp: 160,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Wish Granter"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw cards until you have 7 cards in your hand."
		}
	}, {
		name: {
			en: "Swift"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 150,

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907759,
				tcgplayer: 716232
			}
		}
	],
}

export default card
