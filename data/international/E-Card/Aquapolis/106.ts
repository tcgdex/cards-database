import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'de-de': "Sichlor"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [123],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur le Pokémon Défenseur.",
				'de-de': "Die Schadenspunkte dieses Angriffs werden nicht durch Schwäche, Resistenz, Poké-Powers, Poké-Bodies oder andere das Verteidigende Pokémon betreffende Effekte beeinflusst."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88997,
				cardmarket: 275130
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88997,
				cardmarket: 275130
			}
		},
	]
}

export default card
