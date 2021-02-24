import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electric Punch",
				fr: "Poing Électrique",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Shock Bolt",
				fr: "Choc’Éclair",
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
			},
			damage: 60,

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
	retreat: 2,



}

export default card
