import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 160,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
				fr: "Type Double",
			},
			effect: {
				en: "As long as this Pokémon is in play, it is Lightning and Metal type.",
				fr: "Tant que ce Pokémon est en jeu, il est de type Lightning et Metal.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Bolt",
				fr: "Foudre Aimantée",
			},
			effect: {
				en: "Put a Trainer card from your discard pile into your hand.",
				fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
