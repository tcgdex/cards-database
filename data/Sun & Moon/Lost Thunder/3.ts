import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
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
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 50 more damage. If all of them are heads, this attack does 70 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 50 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Lanza 3 monedas. Si sale cara en 1 de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, hace 50 puntos de daño más. Si sale cara en las 3, hace 70 puntos de daño más.",
				it: "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 50 in più, e se esce testa tutte e tre le volte, ben 70 in più.",
				pt: "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 50 pontos de dano a mais. Se todas saírem cara, este ataque causará 70 pontos de dano a mais.",
				de: "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 50 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
