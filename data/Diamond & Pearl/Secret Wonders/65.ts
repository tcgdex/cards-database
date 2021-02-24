import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		188,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cotton Balloon",
				fr: "Ballon de coton",
			},
			effect: {
				en: "If Skiploom has any Grass Energy attached to it, any damage done to Skiploom by attacks from your opponent's Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Si Floravol possède de l'Énergie Grass, tous dégâts qui lui sont infligés par des attaques de Pokémon Évolués de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "U-turn",
				fr: "Demi-tour",
			},
			effect: {
				en: "Switch Skiploom with 1 of your Benched Pokémon.",
				fr: "Échangez Floravol avec 1 des Pokémon de votre Banc.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
