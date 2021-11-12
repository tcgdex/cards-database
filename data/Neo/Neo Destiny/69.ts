import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dodge",
				fr: "Esquive"
			},
			effect: {
				en: "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)",
				fr: "Si une attaque doit infliger des dégâts à Tygnon pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, prévenez les dégâts infligés à Tygnon par cette attaque. (Tous les autres effets dus à des attaques subsistent.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Supersonic Jab",
				fr: "Punch ultrason"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ses coups sont super rapides, mais il ne peut se battre que pendant trois minutes avant qu'il ne soit fatigué et qu'il ne soit obligé de se reposer."
	}
}

export default card
