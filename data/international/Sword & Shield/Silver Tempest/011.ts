import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [590],
	set: Set,

	name: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "No one knows what the Poké Ball–like pattern on Foongus means or why Foongus has it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682052,
				tcgplayer: 451632
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682052,
				tcgplayer: 451632
			}
		},
	],
}

export default card
