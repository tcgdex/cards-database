import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex"
	},
	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		115,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Baby Outing",
				fr: "Sortie de bébé"
			},
			effect: {
				en: "Look at the top 3 cards of your deck, and then choose 1 of those cards and put it in your hand. Shuffle the rest into your deck afterward.",
				fr: "Regardez les 3 cartes du dessus de votre deck, choisissez l'une de ces cartes et ajoutez-la à votre main. Mélangez ensuite le reste à votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing"
			},

			damage: 30,

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
