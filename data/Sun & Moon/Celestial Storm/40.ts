import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 220,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague Faiblissante",
			},
			effect: {
				en: "This attack does 40 less damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 200,

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
