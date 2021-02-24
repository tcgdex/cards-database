import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],
	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Press",
				fr: "Pression Robuste",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Nose",
				fr: "Triple Nez",
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 80,

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
