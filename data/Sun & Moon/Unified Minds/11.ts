import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Crustle",
		fr: "Crabaraque",
		es: "Crustle",
		it: "Crustle",
		pt: "Crustle",
		de: "Castellith"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		558,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swaddling Leaves",
				fr: "Feuillage Enveloppant",
				es: "Hojas Envolventes",
				it: "Fogliefascia",
				pt: "Enfaixar com Folhas",
				de: "Blätterwickel"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				es: "Corte Furia",
				it: "Tagliofuria",
				pt: "Cortador de Fúria",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 40 more damage. If 2 of them are heads, this attack does 80 more damage. If all of them are heads, this attack does 150 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 40 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 80 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 150 dégâts supplémentaires.",
				es: "Lanza 3 monedas. Si sale cara en 1 de ellas, este ataque hace 40 puntos de daño más. Si sale cara en 2, hace 80 puntos de daño más. Si sale cara en las 3, hace 150 puntos de daño más.",
				it: "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 40 danni in più. Se esce testa due volte, ne infligge 80 in più e, se esce testa tutte e tre le volte, ben 150 in più.",
				pt: "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 40 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 80 pontos de dano a mais. Se todas saírem cara, este ataque causará 150 pontos de dano a mais.",
				de: "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 40 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 80 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 150 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
