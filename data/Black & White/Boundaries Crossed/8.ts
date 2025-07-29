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
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
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

	thirdParty: {
		cardmarket: 280595
	}
}

export default card
