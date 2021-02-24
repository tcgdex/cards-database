import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		225,
	],
	hp: 90,
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
				en: "All the Presents",
				fr: "Nombreux Cadeaux",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
