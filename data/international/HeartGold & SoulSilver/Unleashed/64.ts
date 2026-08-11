import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'de-de': "Damhirplex"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [234],

	hp: 70,

	types: [
		"Colorless"
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
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu’à deux cartes Pokémon de base et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon-Karten und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mystifying Horns",
				'fr-fr': "Mysti-cornes",
				'de-de': "Mystik-Hörner"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The curved antlers subtly change the flow of air to create a strange space where reality is distorted."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89506,
				cardmarket: 279220
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89506,
				cardmarket: 279220
			}
		},
	],

}

export default card
