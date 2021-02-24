import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Passimian",
		fr: "Quartermac",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		766,
	],
	hp: 110,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Fling",
				fr: "Dégommage",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Play",
				fr: "Jeu d’Équipe",
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Passimian.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Quartermac sur votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
