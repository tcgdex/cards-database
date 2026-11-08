import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Exeggutor",
		'fr-fr': "Noadkoko obscur",
		'de-de': "Dunkles Kokowei"
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
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Triple Headbutt",
				'fr-fr': "Triple coup d'boule",
				'de-de': "Triple Headbutt"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "MAX Burst",
				'fr-fr': "Explosion maximale",
				'de-de': "MAX Burst"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon de votre adversaire. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads."
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
	retreat: 2,


	description: {
		'en-us': "If one of its heads falls off, it turns into an Exeggcute, which begins to look for other Exeggcutes using a special form of telepathy.",
		'fr-fr': "S'il perd une de ses deux têtes, il se transforme en Nœunœuf, qui part aussitôt à la recherche d'un autre Nœunœuf grâce à une forme spéciale de télépathie."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274685
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274685
			}
		}
	]
}

export default card
