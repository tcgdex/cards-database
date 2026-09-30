import { Card } from "../../../interfaces"
import Set from "../Play! Pokémon Prize Pack Series 06"

const card: Card = {
	dexId: [1005],
	set: Set,

	name: {
		en: "Roaring Moon",
		fr: "Rugit-Lune",
		es: "Bramaluna",
		it: "Lunaruggente",
		pt: "Lua Estrondo",
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
			it: "Piume Vendicative",
			pt: "Flechas da Vingança",
			de: "Rachegefieder"
		},

		effect: {
			en: "This attack does 10 more damage for each Ancient card in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Temps passé dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño más por cada carta del pasado en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni in più per ogni carta Tempo Passato nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada carta Ancestral na sua pilha de descarte.",
			de: "Diese Attacke fügt für jede Vergangenheitskarte in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			es: "Ala Veloz",
			it: "Alaveloce",
			pt: "Asa da Velocidade",
			de: "Turboschwinge"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		en: "It is possible that this is the creature listed as Roaring Moon in an expedition journal that still holds many mysteries.",
	},

	variants: [
		{
			type: "normal",
		},
	],

	illustrator: "hncl",

}

export default card
