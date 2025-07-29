import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Raticate",
		de: "Rattikarl"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				de: "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Bite",
				de: "Dauerbeißen"
			},
			effect: {
				en: "Flip 3 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 30 more damage. If you get 3 heads, this attack does 10 damage plus 60 more damage.",
				de: "Wirf 3 Münzen. Zeigt 1 Münze \"Kopf\", fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Zeigen 2 Münzen \"Kopf\", fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu. Zeigen 3 Münzen \"Kopf\", fügt dieser Angriff 10 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275347
	}
}

export default card
