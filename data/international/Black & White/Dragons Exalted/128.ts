import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'it-it': "Rayquaza",
		'pt-br': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
			},
			effect: {
				'en-us': "Discard the top 2 cards of your deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280524,
		tcgplayer: 88630
	}
}

export default card
