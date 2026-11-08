import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Scrap Attack",
				'fr-fr': "Attaque de ferraille",
				'de-de': "Rauferei"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your discard pile for a Metal Energy card and attach it to Lairon.",
				'fr-fr': "Lancez une pièce. Si c’est face, récupérez une carte Énergie Metal dans votre pile de défausse et attachez-la à Galegon.",
				'de-de': "Wirf eine Münze. Durchsuche bei \"Kopf\" deinen Ablagestapel nach einer -Energiekarte und lege sie an Stollrak an."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It loves iron ore. Groups of them fight for territory by bashing one another with their steel bodies."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279282,
				tcgplayer: 86582
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279282,
				tcgplayer: 86582
			}
		}
	],

}

export default card
