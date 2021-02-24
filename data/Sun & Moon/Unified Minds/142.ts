import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Escavalier",
		fr: "Lançargot",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		589,
	],
	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Discerning Spear",
				fr: "Épieu Distinct",
			},
			effect: {
				en: "If your opponent's Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
			},
			damage: 80,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Lance",
				fr: "Lance de Fer",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
