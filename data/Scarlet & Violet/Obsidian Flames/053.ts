import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [613],
	set: Set,

	name: {
		fr: "Polarhume",
		en: "Cubchoo",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Coud'Pattes",
			en: "Smash Kick",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Croche-Pied",
			en: "Trip Over",
			es: "Tropezón",
			it: "Inciampare",
			pt: "Tropeção",
			de: "Stolperer"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mizue",

	thirdParty: {
		cardmarket: 725133
	}
}

export default card