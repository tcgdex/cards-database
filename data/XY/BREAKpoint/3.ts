import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Méganium",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Overgrow",
				fr: "Engrais",
			},
			effect: {
				en: "If this Pokémon’s remaining HP is 50 or less, its attacks do 70 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "S'il reste 50 PV ou moins à ce Pokémon, ses attaques infligent 70 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Green Force",
				fr: "Force Verte",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
