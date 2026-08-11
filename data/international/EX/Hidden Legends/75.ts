import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'de-de': "Sterndu"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [120],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Core Guard",
				'fr-fr': "Protection principale",
				'de-de': "Core Guard"
			},
			effect: {
				'en-us': "If Staryu has any Psychic Energy attached to it, damage done to Staryu by any attack is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Si Stari possède des Énergies , les dégâts qui lui sont infligés par une attaque sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "If Staryu has any  Energy attached to it, damage done to Staryu by any attack is reduced by 10 (after applying Weakness and Resistance)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'face",
				'de-de': "Pound"
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
				tcgplayer: 89546,
				cardmarket: 276149
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89546,
				cardmarket: 276149
			}
		},
	]
}

export default card
