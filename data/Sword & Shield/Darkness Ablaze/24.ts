import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Blaziken",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
			},
			effect: {
				en: "As long as this Pokémon is in play, it is Fire and Fighting type.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turbo Drive",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
