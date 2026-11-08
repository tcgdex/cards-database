import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'de-de': "Hoothoot"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [163],

	hp: 50,

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
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It always stands on one foot. It changes feet so fast, the movement can rarely be seen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86173,
				cardmarket: 279038
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86173,
				cardmarket: 279038
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"]
		},
	],

}

export default card
