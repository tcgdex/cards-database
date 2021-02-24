import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'Énergie",
			},
			effect: {
				en: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie Water de ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
