import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'de-de': "Smogmog"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Body Odor",
				'fr-fr': "Odeur corporelle",
				'de-de': "Body Odor"
			},
			effect: {
				'en-us': "As long as Weezing is the Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Bodies between turns.",
				'fr-fr': "Tant que Smogogo est le Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant des Poké-Bodies entre deux tours.",
				'de-de': "As long as Weezing is the Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Bodies between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mist Attack",
				'fr-fr': "Attaque de brume",
				'de-de': "Mist Attack"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Whirlpool",
				'fr-fr': "Tourbillon de boue",
				'de-de': "Sludge Whirlpool"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276796,
		tcgplayer: 90561
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

