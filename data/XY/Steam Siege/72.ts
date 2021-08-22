import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		600,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Klink",
		fr: "Tic",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				es: "Agarre",
				it: "Presa",
				pt: "Agarramento Viciado",
				de: "Klammer"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Disorderly Flip",
				fr: "Renverse Désordre",
				es: "Vuelta Indisciplinada",
				it: "Girosmodato",
				pt: "Virada Desordenada",
				de: "Zügelloser Überschlag"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
