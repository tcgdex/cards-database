import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Registeel",
		fr: "Registeel",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Turbo Arm",
				fr: "Bras Turbo",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Hand",
				fr: "Main de Fer",
			},
			effect: {
				en: "If Regice is on your Bench, heal 30 damage from this Pokémon.",
				fr: "Si Regice est sur votre Banc, soignez 30 dégâts à ce Pokémon.",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
