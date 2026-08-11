import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Herd Charge",
				'fr-fr': "Charge de troupeau",
				'de-de': "Anstürmende Herde"
			},
			effect: {
				'en-us': "Flip a coin for each Tauros you have in play. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Tauros que vous avez en jeu. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf für jedes Tauros, das du im Spiel hast, 1 Münze. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thrash",
				'fr-fr': "Mania",
				'de-de': "Fuchtler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, Tauros does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si c'est pile, Tauros s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei \"Zahl\" fügt Tauros sich selbst 10 Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Once it takes aim at its foe, it makes a headlong charge. It is famous for its violent nature.",
		'fr-fr': "Après avoir choisi sa cible, il fonce dessus tête baissée. Il est réputé pour sa nature violente."
	},

	thirdParty: {
		cardmarket: 278223,
		tcgplayer: 89764
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
