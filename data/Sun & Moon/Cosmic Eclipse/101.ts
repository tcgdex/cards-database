import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		790,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stiffen",
				fr: "Raidissement",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
