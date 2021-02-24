import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Super Deep Dive",
				fr: "Super Gros Plongeon",
			},
			effect: {
				en: "Heal 40 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon. Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
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

	retreat: 3,



}

export default card
