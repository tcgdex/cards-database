import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		fr: "Scalproie",
		en: "Bisharp",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Griffe Acier",
			en: "Metal Claw",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			de: "Metallklaue"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			fr: "Taillade",
			en: "Fury Cutter",
			es: "Corte Furia",
			it: "Tagliofuria",
			pt: "Cortador de Fúria",
			de: "Zornklinge"
		},

		effect: {
			fr: "Lancez 3 pièces. S'il n'y a qu'un côté face, cette attaque inflige 20 dégâts supplémentaires. S'il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S'il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.",
			en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 60 more damage. If all of them are heads, this attack does 120 more damage.",
			es: "Lanza 3 monedas. Si sale cara en una de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, este ataque hace 60 puntos de daño más. Si sale cara en las 3, este ataque hace 120 puntos de daño más.",
			it: "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 60 in più, e se esce testa tutte e tre le volte, 120 in più.",
			pt: "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 60 pontos de dano a mais. Se todas saírem cara, este ataque causará 120 pontos de dano a mais.",
			de: "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 60 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: true,
		reverse: true,
		holo: true,
	}
}

export default card