import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Dual Trans",
				fr: "Double trans",
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokémon.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à 1 de vos Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'énergie",
			},
			effect: {
				en: "Move an Energy card attached to Rotom to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Motisma sur 1 des Pokémon de votre Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
