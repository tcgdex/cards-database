import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		398,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cyclone Slash",
				fr: "Entaille Cyclonique",
			},
			effect: {
				en: "Before doing damage, have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Avant d'infliger des dégâts, demandez à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brave Bird",
				fr: "Rapace",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
