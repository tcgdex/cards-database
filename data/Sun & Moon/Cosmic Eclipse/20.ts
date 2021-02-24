import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Decidueye",
		fr: "Archéduc",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		724,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Skill Dive",
				fr: "Plongeon Contrôlé",
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tracking Shot",
				fr: "Tir Suivi",
			},
			effect: {
				en: "This attack does 80 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 80 dégâts à l’un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
