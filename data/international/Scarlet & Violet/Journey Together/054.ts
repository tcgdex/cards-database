import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [940],
	set: Set,

	name: {
		'en-us': "Iono's Wattrel",
		'fr-fr': "Zapétrel de Mashynn",
		'es-es': "Wattrel de e-Nigma",
		'de-de': "Enigmaras Voltrel",
		'it-it': "Wattrel di Kissara",
		'pt-br': "Wattrel da Kissera",
		'es-mx': "Wattrel de e-Nigma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque",
			'es-es': "Ataque Rápido",
			'de-de': "Ruckzuckhieb",
			'it-it': "Attacco Rapido",
			'pt-br': "Ataque Rápido",
			'es-mx': "Ataque Rápido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Akira Komayama",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817206,
				tcgplayer: 623481
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817206,
				tcgplayer: 623481
			}
		},
	],
}

export default card
