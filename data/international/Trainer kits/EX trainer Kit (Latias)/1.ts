import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [371],
	set: Set,

	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 40,

	types: [
		"Colorless"
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule"
			},
			damage: 10
		}, {
			cost: [
				"Fire",
				"Colorless"
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Enflammer"
			},
			damage: 20
		}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275777,
				tcgplayer: 83694
			}
		},
	],

}

export default card
