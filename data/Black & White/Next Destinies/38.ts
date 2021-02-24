import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Kyurem-EX",
		fr: "Kyurem-EX",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Wings",
				fr: "Ailes Gelées",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hail Blizzard",
				fr: "Tempêtegrêle",
			},
			effect: {
				en: "This Pokémon can't use Hail Blizzard during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Tempêtegrêle pendant votre prochain tour.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
