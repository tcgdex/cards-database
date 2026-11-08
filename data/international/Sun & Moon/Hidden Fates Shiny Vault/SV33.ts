import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Kartana",
		'fr-fr': "Katagami",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Divine Paper",
				'fr-fr': "Papier Sublime",
			},
			effect: {
				'en-us': "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
				'fr-fr': "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "One of the Ultra Beast life-forms, it was observed cutting down a gigantic steel tower with one stroke of its blade.",
	},
}

export default card
