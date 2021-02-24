import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Floette",
		fr: "Floette",
	},
	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		670,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Picking",
				fr: "Cueillette de Fleurs",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez choisir une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte et la mélange avec son deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
