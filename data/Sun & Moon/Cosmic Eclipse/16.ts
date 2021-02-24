import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		586,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Seasonal Blessings",
				fr: "Vœux de Saison",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Rebond",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
