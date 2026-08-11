import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'de-de': "Hornliu"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Spike Stab",
				'fr-fr': "Koud'pic",
				'de-de': "Stachelstich"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, this attack does nothing (not even damage).",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, cette attaque ne fait rien (pas même de dégâts).",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist der verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen (nicht einmal Schadenspunkte)."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
		'fr-fr': "Son dard empoisonné est très puissant. Son corps de couleur criarde est conçu pour repousser ses ennemis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274581,
				tcgplayer: 90538
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274581,
				tcgplayer: 90538
			}
		}
	]
}

export default card

