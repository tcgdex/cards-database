import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur"
	},
	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Diglett",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnitude",
				fr: "Ampleur"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
