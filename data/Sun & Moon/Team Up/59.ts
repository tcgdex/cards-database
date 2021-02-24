import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		34,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 50 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "King's Drum",
				fr: "Tambour du Souverain",
			},
			effect: {
				en: "If Nidoqueen is on your Bench, this attack does 100 more damage.",
				fr: "Si Nidoqueen est sur votre Banc, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
