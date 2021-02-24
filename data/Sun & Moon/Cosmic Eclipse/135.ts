import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		625,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Corner",
				fr: "Coinçage",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 80,

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
	retreat: 1,



}

export default card
