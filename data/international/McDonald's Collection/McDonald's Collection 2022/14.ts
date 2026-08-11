import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [780],

	hp: 120,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Corkscrew Punch",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Fighting"],
			name: {
				'en-us': "Berkshire",
			},
			effect: {
				'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			},
			damage: "70+",
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670479,
				tcgplayer: 281497
			}
		}
	]
}

export default card

