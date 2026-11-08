import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'es-mx': "Vibrava",
		'de-de': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava"
	},

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'es-es': "Trapinch",
		'es-mx': "Trapinch",
		'de-de': "Knacklion",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [329],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Super Vibration",
			'fr-fr': "Super Vibration",
			'es-es': "Supervibración",
			'es-mx': "Supervibración",
			'de-de': "Superschwingung",
			'it-it': "Vibrazione Super",
			'pt-br': "Supervibração"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Rather than using its underdeveloped wings for flight, it rubs them together, emitting ultrasonic waves to attack its enemies.",
	},

	illustrator: "Miki Tanaka",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857627,
				tcgplayer: 662237,
				cardtrader: 356835
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857627,
				tcgplayer: 662237,
				cardtrader: 356835
			}
		},
	],
}

export default card
