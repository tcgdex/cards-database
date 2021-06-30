import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		es: "Ho-Oh",
		it: "Ho-Oh",
		pt: "Ho-Oh",
		de: "Ho-Oh"
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
				fr: "Brûlure Arc-en-Ciel",
				es: "Ardor Arcoíris",
				it: "Fiammabaleno",
				pt: "Queimadura Arco-íris",
				de: "Regenbogenfeuer"
			},
			effect: {
				en: "This attack does 30 more damage for each type of basic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type d’Énergie de base attaché à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica diferente unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni tipo di Energia base assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada tipo de Energia básica ligada a este Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten verschiedenen Basis-Energietypen zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
