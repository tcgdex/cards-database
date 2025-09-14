import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Piloswine",
		de: "Keifel"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Impaling Tusk",
				de: "Durchbohrender Stoßzahn"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Charge",
				de: "Dauernder Ansturm"
			},
			effect: {
				en: "Flip 4 coins. This attack foes 30 damage plus 20 more damage for each heads. Put a damage counter on Piloswine for each heads.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte pro geworfenem \"Kopf\" zu. Lege für jeden \"Kopf\" eine Schadensmarke auf Keifel."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275233,
		tcgplayer: 88115
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
