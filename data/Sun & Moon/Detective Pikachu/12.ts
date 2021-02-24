import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},
	illustrator: undefined,
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyjack",
				fr: "Détournement Psy",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Break Burn",
				fr: "Brûlure Brisante",
			},
			effect: {
				en: "Discard 2 {P} Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Psychic de ce Pokémon.",
			},
			damage: 130,

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
