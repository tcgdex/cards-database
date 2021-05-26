import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Limber",
				fr: "Échauffement"
			},
			effect: {
				en: "This Pokémon can’t be Paralyzed.",
				fr: "Ce Pokémon ne peut pas être Paralysé."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
				fr: "Griffe Taillante"
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
