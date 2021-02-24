import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Burn",
				fr: "Dépense d'énergie",
			},
			effect: {
				en: "All Energy attached to Charizard are fire Energy instead of their usual type.",
				fr: "Toutes les Énergies attachées à Dracaufeu sont des Énergies Fire au lieu de leur type habituel.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
			},
			effect: {
				en: "Discard 2 Energy attached to Charizard.",
				fr: "Défaussez 2 Énergies attachées à Dracaufeu.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
