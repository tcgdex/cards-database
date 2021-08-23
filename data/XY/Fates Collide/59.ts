import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
		es: "Wormadam",
		it: "Wormadam",
		pt: "Wormadam",
		de: "Burmadame"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		413,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Strike Back",
				fr: "Vengeur",
				es: "Contraimpacto",
				it: "Risposta",
				pt: "Revidar",
				de: "Kontern"
			},
			effect: {
				en: "This attack does 20 damage times the number of damage counters on this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 20 de danos vezes o número de contadores de danos neste Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Head",
				fr: "Tête de Fer",
				es: "Cabeza de Hierro",
				it: "Metaltestata",
				pt: "Cabeça de Ferro",
				de: "Eisenschädel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "60+",

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
