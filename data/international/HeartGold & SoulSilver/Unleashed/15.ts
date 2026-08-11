import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'de-de': "Ibitak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [22],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Flügelschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Repeating Drill",
				'fr-fr': "Multivrille",
				'de-de': "Mehrfach-Bohrer"
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 5 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shoots itself suddenly high into the sky, then plummets down in one fell swoop to strike its prey."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85399,
				cardmarket: 279171
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85399,
				cardmarket: 279171
			}
		},
	],

}

export default card
