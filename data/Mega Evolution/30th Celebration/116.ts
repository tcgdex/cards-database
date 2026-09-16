import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	attacks: [{
		name: {
			en: "Fetch and Hide"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent reveals their hand, and you put an Item card you find there on the bottom of your opponent's deck."
		}
	}, {
		name: {
			en: "Tackle"
		},

		cost: ["Colorless"],

		damage: 10,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907723,
				tcgplayer: 714357
			}
		}
	],
}

export default card
