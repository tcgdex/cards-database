import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		162,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Buried Treasure Hunt",
				fr: "Trésor Enfoui",
			},
			effect: {
				en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Discard the other cards.",
				fr: "Regardez les 4 cartes du dessus de votre deck et ajoutez 2 d’entre elles à votre main. Défaussez les autres cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
