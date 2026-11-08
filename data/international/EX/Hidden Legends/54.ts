import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'de-de': "Tanhel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [374],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Basic Pokémon and put it into your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Metal Ball",
				'fr-fr': "Boule métallique",
				'de-de': "Metal Ball"
			},
			effect: {
				'en-us': "Put 1 damage counter on the Defending Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Put 1 damage counter on the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83783,
				cardmarket: 276128
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83783,
				cardmarket: 276128
			}
		},
	]
}

export default card
