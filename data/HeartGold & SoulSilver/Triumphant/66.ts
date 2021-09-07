import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		108,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tongue Whip",
				fr: "Langue-fouet",
			},
			effect: {
				en: "Choose 1 of your opponent’s Benched Pokémon. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l'un des Pokémon de Banc de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
