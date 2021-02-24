import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Light Steps",
				fr: "Pas Légers",
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			},
			damage: 40,

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




}

export default card
