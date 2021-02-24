import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		553,
	],
	hp: 150,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chomp Chomp Panic",
				fr: "Panique Mangeouille",
			},
			effect: {
				en: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
