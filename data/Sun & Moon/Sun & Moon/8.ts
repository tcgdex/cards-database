import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},
	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		284,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Struggle Bug",
				fr: "Survinsecte",
			},
			effect: {
				en: "Move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
				fr: "Déplacez une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
