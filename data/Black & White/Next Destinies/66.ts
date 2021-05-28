import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Bazooka",
				fr: "Canon à Sable",
			},
			effect: {
				en: "You may move a basic Energy attached to this Pokémon to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie de base attachée à ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
