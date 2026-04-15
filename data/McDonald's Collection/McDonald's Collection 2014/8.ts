import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		209,
	],
	set: Set,
	illustrator: "Naoki Saito",
	description: {
		en: "It has an active, playful nature. Many women like to frolic with it because of its affectionate ways.",
	},
	name: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fairy",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},
			damage: "20",
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
		}
	],
	retreat: 2,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281660,
				tcgplayer: 110413
			}
		}
	]
}

export default card
