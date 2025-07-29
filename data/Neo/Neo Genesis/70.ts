import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Quick Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agility"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Pikachu.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Pikachu.",
				de: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Pikachu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il dresse sa queue pour observer les alentours. Parfois les éclairs frappent sa queue quand elle est en l'air."
	},

	thirdParty: {
		cardmarket: 274470
	}
}

export default card
