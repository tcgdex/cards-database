import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
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
		en: "Koffing",
		fr: "Smogo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Body Odor",
				fr: "Odeur corporelle",
				de: "Body Odor"
			},
			effect: {
				en: "As long as Weezing is the Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Bodies between turns.",
				fr: "Tant que Smogogo est le Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant des Poké-Bodies entre deux tours.",
				de: "As long as Weezing is the Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Bodies between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mist Attack",
				fr: "Attaque de brume",
				de: "Mist Attack"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Whirlpool",
				fr: "Tourbillon de boue",
				de: "Sludge Whirlpool"
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

