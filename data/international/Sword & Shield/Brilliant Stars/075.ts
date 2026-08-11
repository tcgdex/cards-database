import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [329],
	set: Set,

	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'es-es': "Trapinch",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
		'de-de': "Knacklion"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'it-it': "Ala Tagliente",
			'pt-br': "Asa Cortante",
			'de-de': "Rasierflügel"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The ultrasonic waves it generates by rubbing its two wings together cause severe headaches.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608525,
				tcgplayer: 263791
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608525,
				tcgplayer: 263791
			}
		},
	],
}

export default card
