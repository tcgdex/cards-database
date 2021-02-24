import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		704,
	],
	hp: 40,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Down",
				fr: "Dilution",
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to this Pokémon, you may search your deck for Goomy and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, vous pouvez chercher Mucuscule dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
