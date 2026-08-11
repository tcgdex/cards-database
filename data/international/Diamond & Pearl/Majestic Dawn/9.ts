import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'de-de': "Mewtu"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Energy Absorption",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energieaufnahme"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 Energy cards and attach them to Mewtwo.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à Mewtwo.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 Energiekarten und lege sie an Mewtu an."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard a Psychic Energy attached to Mewtwo and remove 6 damage counters from Mewtwo.",
				'fr-fr': "Défaussez une Énergie Psychic attachée à Mewtwo et retirez-lui 6 marqueurs de dégât.",
				'de-de': "Lege 1 an Mewtu angelegte -Energie auf deinen Ablagestapel und entferne 6 Schadensmarken von Mewtu."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyburn",
				'fr-fr': "Brûlure psy",
				'de-de': "Psychoverbrennung"
			},

			damage: 60,

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
		'en-us': "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
	},

	thirdParty: {
		cardmarket: 278058,
		tcgplayer: 87421
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		}
	]
}

export default card
