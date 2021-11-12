import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Rayquaza δ",
		fr: "Rayquaza δ ESPÈCES DELTA"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Outrage",
				fr: "Colère"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, this attack does 10 damage plus 10 more damage for each damage counter on Rayquaza.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Rayquaza."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme"
			},
			effect: {
				en: "Discard 1 Fire Energy attached to Rayquaza.",
				fr: "Défaussez 1 Énergie  attachée à Rayquaza."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
