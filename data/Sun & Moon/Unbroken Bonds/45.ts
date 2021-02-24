import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Blizzard",
				fr: "Double Blizzard",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. This attack does 60 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 60 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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
