import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'de-de': "Felino"
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
				'en-us': "Slime",
				'fr-fr': "Bave",
				'de-de': "Schleim"
			},
			effect: {
				'en-us': "If an attack would do damage to Wooper during your opponent's next turn, your opponent flips a coin. If tails, prevent all damage done to Wooper from that attack. (Any other effects of that attack happen.)",
				'fr-fr': "Si une attaque va infliger des dégâts à Axoloto pendant le prochain tour de votre adversaire, il doit lancer une pièce. Si c'est pile, retirez tous les dégâts infligés à Axoloto pendant l'attaque. (Tous les autres effets de l'attaque sont appliqués.)",
				'de-de': "Wenn während des nächsten Zuges deines Gegners ein Angriff Felino Schadenspunkte zufügen wurde, wirft dein Gegner eine Münze. Verhindere bei \"Zahl\" alle Schadenspunkte, die dieser Angriff Felino zufügen würde. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
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
	retreat: 1,


	description: {
		'en-us': "When it walks around on the ground, it coats its body with a slimy, poisonous film.",
		'fr-fr': "Quand il marche sur le sol, il recouvre son corps d'un film visqueux et empoisonné."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274582,
				tcgplayer: 90631
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274582,
				tcgplayer: 90631
			}
		}
	]
}

export default card

