import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Duraludon",
		fr: "Duralugon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Sharpener",
				fr: "Affuteur de Métal"
			},
			effect: {
				en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Beam",
				fr: "Puissant Rayon"
			},

			damage: 110,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Metal"],
	regulationMark: "D"
}

export default card
