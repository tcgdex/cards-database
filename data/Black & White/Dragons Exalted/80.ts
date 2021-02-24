import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Toppling Wind",
				fr: "Mistral",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards of your opponent's deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Horn",
				fr: "Giga Corne",
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
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
	retreat: 4,



}

export default card
