import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Zangoose δ",
		'fr-fr': "Zangoose δ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 70,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Detect",
				'fr-fr': "Détection"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Zangoose during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Mangriff lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90709,
				cardmarket: 277497
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90709,
				cardmarket: 277497
			},
		},
	],

}

export default card
