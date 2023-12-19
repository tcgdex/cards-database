import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
		de: "Roselia"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 60,

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
				en: "Petal Dance",
				fr: "Danse-fleur",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. Roselia is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Roselia est maintenant Confus.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Roselia ist jetzt verwirrt."
			},
			damage: "20x",

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
		en: "Roselia that drink nutritionally rich springwater are said to reveal rare coloration when they bloom."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
