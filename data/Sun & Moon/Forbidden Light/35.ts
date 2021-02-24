import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Élecanon",
			},
			effect: {
				en: "This Pokémon can't use Zap Cannon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
			},
			damage: 80,

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
