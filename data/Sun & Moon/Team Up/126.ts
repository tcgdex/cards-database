import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Make 'Em Pay",
				fr: "Ça Va Payer",
			},
			effect: {
				en: "If your opponent has 4 or more cards in their hand, they reveal their hand. Discard cards you find there until your opponent has exactly 4 cards in their hand.",
				fr: "Si votre adversaire a 4 cartes ou plus dans sa main, il montre sa main. Défaussez des cartes que vous y trouvez jusqu’à ce qu’il reste exactement 4 cartes dans la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Claws",
				fr: "Griffes Affûtées",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

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
