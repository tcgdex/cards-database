import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
		fr: "Crocodil",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
				fr: "Queue tournante",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chaque Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
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
				en: "Surf",
				fr: "Surf",
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
