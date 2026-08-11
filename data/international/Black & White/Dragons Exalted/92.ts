import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Giratina-EX",
		'fr-fr': "Giratina-EX",
		'es-es': "Giratina-EX",
		'it-it': "Giratina-EX",
		'pt-br': "Giratina-EX",
		'de-de': "Giratina-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Psychic",
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
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
