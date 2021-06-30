import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		780,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Arcana",
				fr: "Savoir Draconique",
				es: "Arcano Draco",
				it: "Dragomanzia",
				pt: "Dragões Arcanos",
				de: "Drachen-Arkana"
			},
			effect: {
				en: "If this Pokémon has 2 or more different types of basic Energy attached to it, this attack does 70 more damage.",
				fr: "Si 2 types d’Énergie de base ou plus sont attachées à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 2 o más tipos de Energía Básica diferentes unidas a él, este ataque hace 70 puntos de daño más.",
				it: "Se questo Pokémon ha due o più Energie base di tipo diverso assegnate, questo attacco infligge 70 danni in più.",
				pt: "Se este Pokémon tiver 2 ou mais tipos diferentes de Energia básica ligados a ele, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 2 verschiedene Basis-Energietypen angelegt sind, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
