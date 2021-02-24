import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Paradise Draw",
				fr: "Pioche Paradisiaque",
			},
			effect: {
				en: "You may discard any number of cards from your hand. Then, draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 6 cartes dans votre main.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Egg Splat",
				fr: "Floc Œuf",
			},
			effect: {
				en: "Discard any number of Exeggcute from your hand. This attack does 60 damage for each card you discarded in this way.",
				fr: "Défaussez autant de Noeunoeuf que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
