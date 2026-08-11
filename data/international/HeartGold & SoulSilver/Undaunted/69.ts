import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'de-de': "Skunkapuh"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [434],

	hp: 60,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double écorchure",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
		'en-us': "The foul fluid from its rear is so revolting that it can make people feel queasy up to a mile and a quarter away."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279322,
				tcgplayer: 89587
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279322,
				tcgplayer: 89587
			}
		}
	],

}

export default card
