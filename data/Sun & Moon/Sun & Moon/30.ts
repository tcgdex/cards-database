import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		60,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revolver d’Água",
				de: "Aquaknarre"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
				en: "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 10 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "30+",

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
