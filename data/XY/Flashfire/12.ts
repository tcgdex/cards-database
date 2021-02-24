import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 180,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
			},

			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion Blast",
				fr: "Explo-Combustion",
			},
			effect: {
				en: "This Pokémon can't use Combustion Blast during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
