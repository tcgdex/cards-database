import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Suicune Star",
		fr: "Suicune ☆",
		de: "Suicune *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Splashing Turn",
				fr: "Tour éclaboussant",
				de: "Splashing Turn"
			},
			effect: {
				en: "Switch Suicune Star with 1 of your Benched Pokémon.",
				fr: "Échangez Suicune  avec 1 de vos Pokémon de Banc.",
				de: "Switch Shining Suicune with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Cross Wind",
				fr: "Vent croisé",
				de: "Cross Wind"
			},
			effect: {
				en: "If you have less Prize cards left than your opponent, discard all Energy cards attached to all of your Pokémon.",
				fr: "S'il vous reste moins de cartes Récompense que votre adversaire, défaussez toutes les cartes Énergie attachées à tous vos Pokémon.",
				de: "If you have less Prize cards left than your opponent, discard all Energy cards attached to all of your Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 89608
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
