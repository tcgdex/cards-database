import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1005],
	set: Set,

	name: {
		'en-us': "Roaring Moon",
		'fr-fr': "Rugit-Lune",
		'es-es': "Bramaluna",
		'it-it': "Lunaruggente",
		'pt-br': "Lua Estrondo",
		'de-de': "Donnersichel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Vengeance Fletching",
			'fr-fr': "Plumage Vengeur",
			'es-es': "Venganza Emplumada",
			'it-it': "Piume Vendicative",
			'pt-br': "Flechas da Vingança",
			'de-de': "Rachegefieder"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each Ancient card in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Temps passé dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada carta del pasado en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni carta Tempo Passato nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada carta Ancestral na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jede Vergangenheitskarte in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'es-es': "Ala Veloz",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade",
			'de-de': "Turboschwinge"
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
		'en-us': "It is possible that this is the creature listed as Roaring Moon in an expedition journal that still holds many mysteries.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760739,
				tcgplayer: 542853
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760739,
				tcgplayer: 542853
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858723,
			}
		},
	],

	illustrator: "hncl",

}

export default card
