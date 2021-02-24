import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Trap",
				fr: "Piège d’Écume",
			},
			effect: {
				en: "If 1 of your Pokémon used Bubble during your last turn, this attack does 80 more damage.",
				fr: "Si l’un de vos Pokémon a utilisé Écume pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
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

	retreat: 1,



}

export default card
