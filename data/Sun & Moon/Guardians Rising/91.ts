import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 80,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "The Wages of Fluff",
				fr: "Prix de la Douceur",
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out during your next turn, take 2 more Prize cards.",
				fr: "Si le Pokémon Défenseur est mis K.O. pendant votre prochain tour, récupérez 2 cartes Récompense supplémentaires.",
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],




}

export default card
