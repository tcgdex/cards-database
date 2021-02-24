import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 70,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Detect",
				fr: "Détection",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Hitmonchan during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à Tygnon pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
