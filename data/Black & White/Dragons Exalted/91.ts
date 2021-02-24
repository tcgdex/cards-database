import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Jet Headbutt",
				fr: "Bélier Volant",
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],





}

export default card
