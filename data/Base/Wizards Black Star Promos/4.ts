import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Recharge",
				fr: "Recharge"
			},
			effect: {
				en: "Search your deck for a Energy card and attach it to Pikachu. Shuffle your deck afterward.",
				fr: "Dans votre deck, cherchez une carte  Energie et attachez-la à Pikachu. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Éclair"
			},
			effect: {
				en: "Discard all Energy cards attached to Pikachu in order to use this attack.",
				fr: "Défaussez toutes les cartes Énergie attachées à Pikachu pour utiliser cette attaque."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,

	description: {
		fr: "Quand plusieurs de ces Pokémon se réunissent, ils attirent tellement d'électricité qu'ils peuvent provoquer des coups de foudre."
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-movie-inverted"]
		},
		{
			type: "normal",
			stamp: ["1st-movie"]
		},
		{
			type: "normal",
			stamp: ["pikachu-tail"]
		}
	]
}

export default card
