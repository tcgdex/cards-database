import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},
	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 80,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prowl",
				fr: "Rôder",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher une carte dans votre deck, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
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
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],




}

export default card
