import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Entomb",
				fr: "Cercueil de Glace",
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed. This Pokémon can't use Ice Entomb during your next turn.",
				fr: "Le Pokémon Défenseur est maintenant Paralysé. Ce Pokémon ne peut pas utiliser Cercueil de Glace pendant votre prochain tour.",
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

	retreat: 4,



}

export default card
