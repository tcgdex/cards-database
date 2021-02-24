import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		743,
	],
	hp: 60,
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
				en: "Curative Pollen",
				fr: "Pollen Curatif",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 30,

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
