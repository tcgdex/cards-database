import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		222,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Refresh",
				fr: "Régénération",
			},
			effect: {
				en: "Heal 30 damage and remove all Special Conditions from this Pokémon.",
				fr: "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spiny Rush",
				fr: "Assaut Épineux",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
