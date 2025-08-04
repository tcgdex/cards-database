import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		624,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge Order",
				fr: "Ordre de Charge",
				es: "Orden de Carga",
				it: "Alla Carica",
				pt: "Ordem de Carga",
				de: "Marschbefehl"
			},
			effect: {
				en: "This attack does 10 damage times the number of your Pawniard.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Scalpion.",
				es: "Este ataque hace 10 puntos de daño por cada uno de tus Pawniard.",
				it: "Questo attacco infligge 10 danni per ogni Pawniard che hai.",
				pt: "Este ataque causa 10 de danos vezes o número de seus Pawniard.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Gladiantri zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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

	thirdParty: {
		cardmarket: 291633,
		tcgplayer: 121193
	}
}

export default card
