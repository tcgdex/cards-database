import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "TLC",
				fr: "Soins Dévoués",
			},
			effect: {
				en: "Shuffle 1 of your opponent's Benched Pokémon that has any damage counters on it and all cards attached to it into their deck.",
				fr: "Mélangez dans le deck de votre adversaire un de ses Pokémon de Banc ayant au moins un marqueur de dégâts et toutes les cartes qui lui sont attachées.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ocean Cyclone",
				fr: "Cyclone Océanique",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
