import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		655,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystical Torch",
				fr: "Torche Mystique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may leave your opponent's Active Pokémon Burned.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danse Flamme",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
