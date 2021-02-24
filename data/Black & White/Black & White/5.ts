import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		497,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Storm",
				fr: "Tempêteverte",
			},
			effect: {
				en: "Heal 20 damage from each of your Grass Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],




}

export default card
