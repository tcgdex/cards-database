import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Threatening Pattern",
				fr: "Motif Menaçant"
			},
			effect: {
				en: "During your opponent’s next turn, Energy can’t be attached from your opponent's hand to the Defending Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, de l’Énergie ne peut pas être attachée de la main de votre adversaire au Pokémon Défenseur."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "U-turn",
				fr: "Demi-Tour"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
