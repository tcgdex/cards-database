import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		505,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrutinize",
				fr: "Examen",
			},
			effect: {
				en: "Look at the top 2 cards of your opponent's deck, discard 1 of them, and put the other card back.",
				fr: "Regardez les 2 cartes du dessus du deck de votre adversaire, défaussez-en une puis replacez l’autre carte sur le deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
