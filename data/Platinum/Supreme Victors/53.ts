import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},
	illustrator: "Satoshi Ohta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet lianes",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swallow",
				fr: "Avale",
			},
			effect: {
				en: "Flip a coin. If heads, remove from Carnivine the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, retirez à Vortente autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
