import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Melodelfe"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Clefairy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shining Fingers",
				fr: "Doigts brillants"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Comet Punch",
				fr: "Poing météore"
			},
			effect: {
				en: "During your next turn, Extra Comet Punch does 30 damage plus 30 more damage.",
				fr: "Lors de votre prochain tour, Poing météore inflige 30 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
