import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Exeggutor",
		fr: "Noadkoko obscur",
		de: "Dunkles Kokowei"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Exeggcute",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Headbutt",
				fr: "Triple coup d'boule",
				de: "Triple Headbutt"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "MAX Burst",
				fr: "Explosion maximale",
				de: "MAX Burst"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon de votre adversaire. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "S'il perd une de ses deux têtes, il se transforme en Nœunœuf, qui part aussitôt à la recherche d'un autre Nœunœuf grâce à une forme spéciale de télépathie."
	},

	thirdParty: {
		cardmarket: 274685
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
