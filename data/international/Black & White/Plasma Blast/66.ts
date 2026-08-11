import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Palkia-EX",
		'fr-fr': "Palkia EX",
		'es-es': "Palkia-EX",
		'it-it': "Palkia-EX",
		'pt-br': "Palkia-EX",
		'de-de': "Palkia-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strafe",
				'fr-fr': "Rase-Motte",
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dimension Heal",
				'fr-fr': "Soin Dimensionnel",
			},
			effect: {
				'en-us': "Heal from this Pokémon 20 damage for each Plasma Energy attached to this Pokémon.",
				'fr-fr': "Soignez à ce Pokémon 20 dégâts pour chaque Énergie Plasma attachée à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
