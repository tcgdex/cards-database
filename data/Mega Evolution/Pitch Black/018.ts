import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Popplio",
		fr: "Otaquin",
		es: "Popplio",
		'es-mx': "Popplio",
		de: "Robball"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [728],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound"
		},

		cost: ["Water"],

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895806,
				tcgplayer: 704775
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895806,
				tcgplayer: 704775
			}
		},
	],
}

export default card
