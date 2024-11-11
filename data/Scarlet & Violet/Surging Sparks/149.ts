import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff",
		es: "Zangoose",
		it: "Zangoose",
		pt: "Zangoose",
		de: "Sengo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fury Cutter",
			fr: "Taillade",
			es: "Corte Furia",
			it: "Tagliofuria",
			pt: "Cortador de Fúria",
			de: "Zornklinge"
		},

		effect: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 50 more damage. If all of them are heads, this attack does 80 more damage.",
			fr: "Lancez 3 pièces. S'il n'y a qu'un côté face, cette attaque inflige 20 dégâts supplémentaires. S'il y a 2 côtés face, cette attaque inflige 50 dégâts supplémentaires. S'il y a 3 côtés face, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Lanza 3 monedas. Si sale cara en una de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, este ataque hace 50 puntos de daño más. Si sale cara en las 3, este ataque hace 80 puntos de daño más.",
			it: "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 50 in più, e se esce testa tutte e tre le volte, 80 in più.",
			pt: "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 50 pontos de dano a mais. Se todas saírem cara, este ataque causará 80 pontos de dano a mais.",
			de: "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 50 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card