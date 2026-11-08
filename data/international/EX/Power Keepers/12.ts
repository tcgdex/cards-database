import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plasma",
				'fr-fr': "Plasma",
				'de-de': "Plasma"
			},
			effect: {
				'en-us': "Search your discard pile for a Lightning Energy card and attach it to Raichu.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Énergie  et attachez-la à Raichu.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an Raichu an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
				'de-de': "Donnerblitz"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Raichu.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Raichu.",
				'de-de': "Entferne alle an Raichu angelegten Energiekarten und lege sie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277318,
		tcgplayer: 88509
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
