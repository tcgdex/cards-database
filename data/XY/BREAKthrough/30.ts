import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous Abyssal",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 7 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 7 cartes.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Balance Bind",
				fr: "Étreinte Équilibre",
			},
			effect: {
				en: "If you and your opponent have the same number of Benched Pokémon, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Si votre adversaire et vous avez le même nombre de Pokémon de Banc, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
