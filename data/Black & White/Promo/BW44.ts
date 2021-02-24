import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Kyurem",
		fr: "Kyurem",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Outrage",
				fr: "Colère",
			},
			effect: {
				en: "Does 10 more damage for each damage counter on this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Glaciate",
				fr: "Ère Glaciaire",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
