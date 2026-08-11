import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'de-de': "Bluzuk"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psycho Waves",
				'fr-fr': "Psycho-vagues",
				'de-de': "Psycho Waves"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Venonat. The Defending Pokémon is now Confused.",
				'fr-fr': "Défaussez une carte Énergie attachée à Mimitoss. Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Discard an Energy card attached to Venonat. The Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276260,
				tcgplayer: 90307
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276260,
				tcgplayer: 90307
			},
		},
	],
}

export default card
