import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		743,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Honey Gather",
				fr: "Cherche Miel",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher jusqu’à 2 cartes Énergie de base dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pollen Shot",
				fr: "Tir Pollen",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
