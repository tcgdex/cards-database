import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		305,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Rigidify",
				fr: "Solidification",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d’Boule",
			},

			damage: 70,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
