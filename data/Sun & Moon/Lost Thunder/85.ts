import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		785,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Flashing Bolt",
				fr: "Éclair Aveuglant",
			},
			effect: {
				en: "This Pokémon can't use Flashing Bolt during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Éclair Aveuglant pendant votre prochain tour.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
