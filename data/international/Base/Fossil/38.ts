import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss",
		'de-de': "Kingler"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Nageoire",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Kingler.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Krabboss.",
				'de-de': "Fügt 10 Schadenspunkte mal die Anzahl der Schadensmarken auf Kingler zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-masse",
				'de-de': "Krabbhammer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "The large pincer has 10,000 horsepower of crushing power. However, its huge size makes it unwieldy to use.",
		'fr-fr': "Son énorme pince peut déployer une pression de 1000 Kg. Mais elle est très encombrante."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273899,
				tcgplayer: 44440
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273899,
				tcgplayer: 44440
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
