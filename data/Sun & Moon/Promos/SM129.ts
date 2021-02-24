import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Dual Splash",
				fr: "Double Splash",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Grand Wave",
				fr: "Vague Imposante",
			},
			effect: {
				en: "This Pokémon can't use Grand Wave during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Vague Imposante pendant votre prochain tour.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
