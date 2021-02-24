import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Vital Dance",
				fr: "Danse Vitale",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher jusqu’à 2 cartes Énergie de base dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Casual Slap",
				fr: "Gifle Amicale",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
