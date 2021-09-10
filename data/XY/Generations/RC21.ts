import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Sylveon EX",
		fr: "Nymphali-EX",
	},
	illustrator: "sui",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		700,
	],
	hp: 170,
	types: [
		"Fairy",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dress Up",
				fr: "Costumes",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Precious Ribbon",
				fr: "Ruban Précieux",
			},
			effect: {
				en: "Move a Fairy Energy from this Pokémon to 1 of your Benched Pokémon. If you do, heal 50 damage from that Pokémon.",
				fr: "Déplacez une Énergie Fairy de ce Pokémon vers l'un de vos Pokémon de Banc. Dans ce cas, soignez 50 dégâts au Pokémon choisi.",
			},
			damage: 100,

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
