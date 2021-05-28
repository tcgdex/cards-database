import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Corviknight",
		fr: "Corvaillus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Corvisquire",
		fr: "Bleuseille"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flying Taxi",
				fr: "Taxi Volant"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 1 of your Pokémon, except any Corviknight, and all attached cards into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon, vous pouvez ajouter à votre main l’un de vos Pokémon, à l’exception d’un Corvaillus, et toutes les cartes attachées."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blasting Wind",
				fr: "Vent Impitoyable"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
