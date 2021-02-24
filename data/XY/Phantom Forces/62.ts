import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Dialga-EX",
		fr: "Dialga-EX",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chrono Wind",
				fr: "Vent Temporel",
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon-EX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Metal Impact",
				fr: "Full Metal Impact",
			},
			effect: {
				en: "Discard 2 Metal Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies Metal attachées à ce Pokémon.",
			},
			damage: 150,

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
	retreat: 2,



}

export default card
