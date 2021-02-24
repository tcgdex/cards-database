import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		563,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Elongating Arms",
				fr: "Bras à Rallonges",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crazy Slap",
				fr: "Gifle Folle",
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
