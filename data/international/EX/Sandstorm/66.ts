import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nenupiot",
		'de-de': "Loturzel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [270],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rain Dish",
				'fr-fr': "Cuvette",
				'de-de': "Regengenuss"
			},
			effect: {
				'en-us': "At any time between turns, remove 1 damage counter from Lotad.",
				'fr-fr': "N'importe quand entre deux tours, retirez à Nenupiot un marqueur de dégât.",
				'de-de': "Entferne zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke von Loturzel."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275843,
				tcgplayer: 86831
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275843,
				tcgplayer: 86831
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871526,
				tcgplayer: 477547
			}
		},
	],

}

export default card
