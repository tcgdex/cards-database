import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Electivire FB",
		fr: "Elekable ",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 90,
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
				en: "Dump and Draw",
				fr: "Jeter et piocher",
			},
			effect: {
				en: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
				fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Current",
				fr: "Courant électrique",
			},
			effect: {
				en: "Move a Lightning Energy card attached to Electivire FB to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie Lightning attachée à Elekable  sur 1 de vos Pokémon de Banc.",
			},
			damage: 40,

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
	retreat: 3,



}

export default card
