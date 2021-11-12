import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Tartard en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
				fr: "Lessiveuse"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.",
				fr: "Si des cartes Énergie sont attachées au Pokémon Défenseur, choisissez 1 d'elle et défaussez-la."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Excellent nageur, il pratique le crawl ou la nage papillon mieux qu'un champion olympique."
	}
}

export default card
