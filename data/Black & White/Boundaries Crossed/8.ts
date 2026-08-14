import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 100,

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
				en: "Horn Attack",
				fr: "Koud'Korne",
				de: "Hornattacke"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giga Horn",
				fr: "Giga Corne",
				de: "Gigahorn"
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				de: "Wirf 2 Münzen. Wenn beide „Zahl“ zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "No matter how heavy its opponents, it flings them far away with its prized horn.",
		de: "Mit seinem prämierten Horn schleudert es jeden noch so schweren Gegner bis in weite Ferne."
	},

	thirdParty: {
		cardmarket: 280595,
		tcgplayer: 86066
	}
}

export default card
