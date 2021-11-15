import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Spheal",
		fr: "Obalie"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		363,
	],
	hp: 40,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defense Curl",
				fr: "Boul'armure"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Spheal during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Obalie lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde boréale"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
