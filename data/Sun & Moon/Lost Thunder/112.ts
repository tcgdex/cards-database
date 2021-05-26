import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sturdy",
				fr: "Fermeté",
			},
			effect: {
				en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
				fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d’une attaque, ce Pokémon n’est pas mis K.O. et il lui reste 10 PV.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Spin",
				fr: "Tournis Roulis",
			},
			effect: {
				en: "During your next turn, this Pokémon's Rolling Spin attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Tournis Roulis de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
