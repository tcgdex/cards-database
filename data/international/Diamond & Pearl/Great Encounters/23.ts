import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'de-de': "Latios"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Draw",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energieanziehung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie de base et attachez-la à Latios. Ensuite, mélangez votre deck.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an Latios an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Luster Purge",
				'fr-fr': "Lumi-Eclat",
				'de-de': "Scheinwerfer"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to Latios.",
				'fr-fr': "Défaussez 3 Énergies attachées à Latios.",
				'de-de': "Lege 3 Energien, die an Latios angelegt sind, auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A highly intelligent Pokémon. By folding back its wings in flight, it can overtake jet planes.",
	},

	thirdParty: {
		cardmarket: 277925,
		tcgplayer: 86665
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
