import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Happy Mime",
				'fr-fr': "Mime Heureux",
			},
			effect: {
				'en-us': "Each player draws a card.",
				'fr-fr': "Chaque joueur pioche une carte.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.",
	},

	thirdParty: {
		cardmarket: 396637,
		tcgplayer: 197687
	}
}

export default card
