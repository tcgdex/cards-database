import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie Niv. 18",
		'de-de': "Seemops"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [363],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],

			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'de-de': "Pulverschnee"
			},

			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

			damage: 10
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball'glace",
				'de-de': "Frostbeule"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		'en-us': "It rolls across ice floes to reach shore because its body is poorly shaped for swimming."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278656,
				tcgplayer: 89449
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278656,
				tcgplayer: 89449
			}
		},
	],

}

export default card
