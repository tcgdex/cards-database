import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Zangoose δ",
		fr: "Zangoose δ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		335,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Detect",
				fr: "Détection"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Zangoose during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Mangriff lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe acier"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277497
	}
}

export default card
