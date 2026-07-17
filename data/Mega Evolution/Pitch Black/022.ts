import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Palafin",
		fr: "Superdofin",
		es: "Palafin",
		'es-mx': "Palafin",
		de: "Delfinator"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [964],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Finizen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Knuckle Justice"
		},

		cost: ["Water", "Water"],

		damage: "80+",

		effect: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 200 more damage"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895810,
				tcgplayer: 704779
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895810,
				tcgplayer: 704779
			}
		},
	],
}

export default card
