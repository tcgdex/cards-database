import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [171],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d’énergie",
				'de-de': "Energiereflexion"
			},
			effect: {
				'en-us': "Move an Energy card attached to Lanturn to 1 of your Benched Pokémon.",
				'fr-fr': "Prenez une carte Énergie attachée à Lanturn et attachez-la à l’un des Pokémon de votre Banc.",
				'de-de': "Lege 1 an Lanturn angelegte Energiekarte an 1 Pokémon auf deiner Bank an."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The light it emits is so bright that it can illuminate the sea’s surface from a depth of over three miles."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86610,
				cardmarket: 279174
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86610,
				cardmarket: 279174
			}
		},
	],

}

export default card
