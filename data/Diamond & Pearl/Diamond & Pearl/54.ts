import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magnemite",
		fr: "Magneti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tri Attack",
				fr: "Triplattaque",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Ray",
				fr: "Rayon magnétique",
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has any Energy attached to it and switch that Pokémon with 1 of the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire possédant de l'Énergie et l'échanger avec 1 des Pokémon Défenseurs.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
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
