import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [128],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud’pattes",
				'de-de': "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crimson Bull",
				'fr-fr': "Taurouge",
				'de-de': "Purpurbulle"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. Tauros is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Tauros est maintenant Confus.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They fight each other by locking horns. The herd’s protector takes pride in its battle-scarred horns."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89766,
				cardmarket: 279197
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89766,
				cardmarket: 279197
			}
		},
	],

}

export default card
