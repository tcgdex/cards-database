import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682150,
				tcgplayer: 451757
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682150,
				tcgplayer: 451757
			}
		},
	],
}

export default card
