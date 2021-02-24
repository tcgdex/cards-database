import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Xerneas",
		fr: "Xerneas",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 120,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Force",
				fr: "Force Arc-en-Ciel",
			},
			effect: {
				en: "This attack does 30 more damage for each different type of Pokémon on your Bench.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Creation",
				fr: "Création de Puissance",
			},
			effect: {
				en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

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
	retreat: 2,



}

export default card
