import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Anorith δ",
		'fr-fr': "Anorith δ",
		'de-de': "Anorith"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		347,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Claw Fossil",
		'fr-fr': "Fossile griffe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier",
				'de-de': "Metallklaue"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte secrète",
				'de-de': "Aufwärtsstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277027
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
