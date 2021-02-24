import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magnéti",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		81,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkling Induction",
				fr: "Induction Étincelante",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Magnemite on your Bench.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Magnéti sur votre Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule Éclair",
			},

			damage: 20,

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
