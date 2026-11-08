import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'de-de': "Natu"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [177],

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
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Teleport",
				'fr-fr': "Téléport",
				'de-de': "Teleport"
			},
			effect: {
				'en-us': "Switch Natu with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Natu avec l’un des Pokémon de votre Banc.",
				'de-de': "Tausche Natu gegen 1 Pokémon auf deiner Bank aus."
			},

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
		'en-us': "It usually forages for food on the ground but may, on rare occasions, hop onto branches to peck at shoots."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87687,
				cardmarket: 279211
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87687,
				cardmarket: 279211
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"],
		}
	],

}

export default card
