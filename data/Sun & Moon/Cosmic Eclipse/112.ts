import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
		es: "Armaldo",
		it: "Armaldo",
		pt: "Armaldo",
		de: "Armaldo"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ancient Blast",
				fr: "Explosion Ancestrale",
				es: "Sacudida Ancestral",
				it: "Antica Esplosione",
				pt: "Explosão Arcaica",
				de: "Uralte Eruption"
			},
			effect: {
				en: "This attack does 50 more damage for each Unidentified Fossil card in your discard pile.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Fossile Inconnu dans votre pile de défausse.",
				es: "Este ataque hace 50 puntos de daño más por cada carta de Fósil Desconocido en tu pila de descartes.",
				it: "Questo attacco infligge 50 danni in più per ogni carta Fossile Sconosciuto nella tua pila degli scarti.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada carta Fóssil Não Identificado na sua pilha de descarte.",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Unbekanntes Fossil-Karten in deinem Ablagestapel zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Instagriffe",
				es: "Garra Mach",
				it: "Artiglio Mach",
				pt: "Garra Supersônica",
				de: "Tempoklaue"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
