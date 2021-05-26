import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zacian",
		fr: "Zacian"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Armament",
				fr: "Artillerie Métallique"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Metal",
			],
			name: {
				en: "Amazing Sword",
				fr: "Épée Magnifique"
			},
			effect: {
				en: "If your opponent has any Pokémon VMAX in play, this attack does 150 more damage.",
				fr: "Si votre adversaire a au moins un Pokémon-VMAX en jeu, cette attaque inflige 150 dégâts supplémentaires."
			},
			damage: "150+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
