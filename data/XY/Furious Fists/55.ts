import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "M Lucario-EX",
		fr: "M-Lucario-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 220,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Lucario-EX",
		fr: "Lucario-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rising Fist",
				fr: "Poing Imminent",
			},
			effect: {
				en: "Discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
