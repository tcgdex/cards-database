import { Card } from '../../../interfaces'
import Set from '../Evolutions'

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
	hp: 150,
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
			type: "Ability",
			name: {
				en: "Energy Burn",
			},
			effect: {
				en: "All Energy attached to this Pokémon are Fire Energy instead of their usual type.",
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
				fr: "Talent : Dépense d’Énergie",
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon.",
				fr: "Toutes les Énergies attachées à ce Pokémon sont des Énergies Fire au lieu de leur type habituel.",
			},
			damage: 200,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				fr: "Danse Flamme",
			},
			effect: {
				fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
			},
			damage: 200,

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
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
