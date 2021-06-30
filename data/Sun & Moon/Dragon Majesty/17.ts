import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocéan",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	},
	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		117,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d’Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
