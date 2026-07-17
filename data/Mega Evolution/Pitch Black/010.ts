import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		'es-mx': "Centiskorch",
		de: "Infernopod"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [851],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Controlled Burn"
		},

		cost: ["Fire"],

		effect: {
			en: "Discard the top 2 cards from your opponent's deck"
		}
	}, {
		name: {
			en: "Heat Tackle"
		},

		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895798,
				tcgplayer: 704767
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895798,
				tcgplayer: 704767
			}
		},
	],
}

export default card
