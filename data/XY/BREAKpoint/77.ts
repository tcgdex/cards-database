import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "M Scizor-EX",
		fr: "M-Cizayox-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 220,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scizor-EX",
		fr: "Cizayox-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Iron Crusher",
				fr: "Écrase Fer",
			},
			effect: {
				en: "You may discard a Special Energy attached to your opponent's Active Pokémon or a Stadium card in play.",
				fr: "Vous pouvez défausser une carte Énergie spéciale attachée au Pokémon Actif de votre adversaire ou une carte Stade en jeu.",
			},
			damage: 120,

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
	retreat: 2,



}

export default card
