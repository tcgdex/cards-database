import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},
	illustrator: "kanahei",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		702,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. This Pokémon is now Asleep.",
				fr: "Soignez 30 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pachi",
				fr: "Pachi",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 10,

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
	retreat: 1,



}

export default card
