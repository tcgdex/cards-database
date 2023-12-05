import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Wooper",
		fr: "Axoloto",
		de: "Felino"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		194,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Slime",
				fr: "Bave",
				de: "Schleim"
			},
			effect: {
				en: "If an attack would do damage to Wooper during your opponent's next turn, your opponent flips a coin. If tails, prevent all damage done to Wooper from that attack. (Any other effects of that attack happen.)",
				fr: "Si une attaque va infliger des dégâts à Axoloto pendant le prochain tour de votre adversaire, il doit lancer une pièce. Si c'est pile, retirez tous les dégâts infligés à Axoloto pendant l'attaque. (Tous les autres effets de l'attaque sont appliqués.)",
				de: "Wenn während des nächsten Zuges deines Gegners ein Angriff Felino Schadenspunkte zufügen wurde, wirft dein Gegner eine Münze. Verhindere bei \"Zahl\" alle Schadenspunkte, die dieser Angriff Felino zufügen würde. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu",
				de: "Schweifschlag"
			},

			damage: 20,

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

	description: {
		fr: "Quand il marche sur le sol, il recouvre son corps d'un film visqueux et empoisonné."
	}
}

export default card
