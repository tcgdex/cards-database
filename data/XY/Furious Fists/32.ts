import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Négapi",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Negative Discard",
				fr: "Défausse Négative",
			},
			effect: {
				en: "Put 2 basic Energy cards from your discard pile into your hand.",
				fr: "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
			},

			damage: 20,

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
