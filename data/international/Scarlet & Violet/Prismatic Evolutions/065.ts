import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1005],
	set: Set,

	name: {
		'en-us': "Roaring Moon",
		'fr-fr': "Rugit-Lune",
		'es-es': "Bramaluna",
		'pt-br': "Lua Estrondo",
		'it-it': "Lunaruggente",
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
			'pt-br': "Flechas da Vingança",
			'it-it': "Piume Vendicative",
			'de-de': "Rachegefieder"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each Ancient card in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Temps passé dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada carta del pasado en tu pila de descartes.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada carta Ancestral na sua pilha de descarte.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni carta Tempo Passato nella tua pila degli scarti.",
			'de-de': "Diese Attacke fügt für jede Vergangenheitskarte in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'es-es': "Ala Veloz",
			'pt-br': "Asa da Velocidade",
			'it-it': "Alaveloce",
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

	illustrator: "hncl",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805454,
				tcgplayer: 610420
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805454,
				tcgplayer: 610420
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806498,
				tcgplayer: 610582
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806499,
				tcgplayer: 610683
			}
		},
	],
}

export default card
