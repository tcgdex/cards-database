import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		de: "Hornliu"
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
				en: "Spike Stab",
				fr: "Koud'pic",
				de: "Stachelstich"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, cette attaque ne fait rien (pas même de dégâts).",
				de: "Wirf eine Münze. Bei \"Kopf\" ist der verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen (nicht einmal Schadenspunkte)."
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

	description: {
		fr: "Son dard empoisonné est très puissant. Son corps de couleur criarde est conçu pour repousser ses ennemis."
	},

	thirdParty: {
		cardmarket: 274581,
		tcgplayer: 90538
	}
}

export default card
