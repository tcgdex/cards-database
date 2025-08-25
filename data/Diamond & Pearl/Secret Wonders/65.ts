import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
		de: "Hubelupf"
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
				de: "Baumwollballon"
			},
			effect: {
				en: "If Skiploom has any Grass Energy attached to it, any damage done to Skiploom by attacks from your opponent's Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Si Floravol possède de l'Énergie Grass, tous dégâts qui lui sont infligés par des attaques de Pokémon Évolués de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Solange an Hubelupf mindestens 1 -Energie angelegt ist, wird aller Schaden, der Hubelupf von Angriffen von entwickelten Pokémon deines Gegners um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				de: "Kehrtwende"
			},
			effect: {
				en: "Switch Skiploom with 1 of your Benched Pokémon.",
				fr: "Échangez Floravol avec 1 des Pokémon de votre Banc.",
				de: "Tausche Hubelupf gegen 1 Pokémon auf deiner Bank aus."
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
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 277818,
		tcgplayer: 89256
	}
}

export default card
