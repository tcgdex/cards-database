import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Destiny Stinger",
				fr: "Piqûre du Destin",
			},
			effect: {
				en: "You can use this attack only if this Pokémon has any damage counters on it. Both Active Pokémon are Knocked Out.",
				fr: "Vous ne pouvez utiliser cette attaque que si ce Pokémon a des marqueurs de dégâts. Les deux Pokémon Actifs sont mis K.O.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige 10 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
