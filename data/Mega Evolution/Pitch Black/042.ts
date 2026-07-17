import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		'es-mx': "Mankey",
		de: "Menki"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Low Sweep"
		},

		cost: ["Colorless"],

		damage: 20
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895828,
				tcgplayer: 704799
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895828,
				tcgplayer: 704799
			}
		},
	],
}

export default card
