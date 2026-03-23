import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Mélofée",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [35],
	hp: 60,
	types: ["Fairy"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Nombreux Cadeaux",
			},
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, vous pouvez chercher une carte dans votre deck puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Attaque Surprise",
			},
			damage: "40",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
