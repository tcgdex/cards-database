import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Panic Poison",
				fr: "Poison Panique",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sludge Bomb",
				fr: "Bomb-Beurk",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
