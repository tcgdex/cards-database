import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Roaring Moon",
		fr: "Rugit-Lune",
		es: "Bramaluna",
		pt: "Lua Estrondo",
		it: "Lunaruggente",
		de: "Donnersichel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Vengeance Fletching",
			fr: "Plumage Vengeur",
			es: "Venganza Emplumada",
			pt: "Flechas da Vingança",
			it: "Piume Vendicative",
			de: "Rachegefieder"
		},

		effect: {
			en: "This attack does 10 more damage for each Ancient card in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Temps passé dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño más por cada carta del pasado en tu pila de descartes.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada carta Ancestral na sua pilha de descarte.",
			it: "Questo attacco infligge 10 danni in più per ogni carta Tempo Passato nella tua pila degli scarti.",
			de: "Diese Attacke fügt für jede Vergangenheitskarte in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			es: "Ala Veloz",
			pt: "Asa da Velocidade",
			it: "Alaveloce",
			de: "Turboschwinge"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "hncl",

	thirdParty: {
		cardmarket: 805454
	}
}

export default card