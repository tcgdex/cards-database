import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Whismur",
		fr: "Chuchmur",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		293,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bawl",
				fr: "Sanglots",
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Your opponent can't play any Trainer cards from their hand during their next turn.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
