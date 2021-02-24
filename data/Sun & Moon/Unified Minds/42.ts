import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		460,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Freeze",
				fr: "Gel Rapide",
			},
			effect: {
				en: "If your opponent's Active Pokémon has any Water Energy attached to it, it is now Paralyzed.",
				fr: "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, ce Pokémon est maintenant Paralysé.",
			},
			damage: 70,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
			},
			damage: 140,

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
