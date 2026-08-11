import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Energy Blow",
				'fr-fr': "Coup d'énergie",
				'de-de': "Energy Blow"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Shaymin.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Shaymin.",
				'de-de': "Does 10 damage plus 10 more damage for each Energy attached to Shaymin."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aromatherapy",
				'fr-fr': "Aromathérapi",
				'de-de': "Aromatherapy"
			},
			effect: {
				'en-us': "Remove 2 damage counters from each of your Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon 2 marqueurs de dégât.",
				'de-de': "Remove 2 damage counters from each of your Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in flower patches and avoids detection by curling up to look like a flowering plant."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89106,
				cardmarket: 278435
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 125077
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89106
			}
		}
	],

}

export default card
