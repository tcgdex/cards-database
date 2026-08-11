import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Iono's Wattrel",
		'fr-fr': "Zapétrel de Mashynn",
		'es-es': "Wattrel de e-Nigma",
		'es-mx': "Wattrel de e-Nigma",
		'de-de': "Enigmaras Voltrel",
		'it-it': "Wattrel di Kissara",
		'pt-br': "Wattrel da Kissera"
	},

	illustrator: "Akira Komayama",
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
			'es-mx': "Ataque Rápido",
			'de-de': "Ruckzuckhieb",
			'it-it': "Attacco Rapido",
			'pt-br': "Ataque Rápido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
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

	description: {
		'en-us': "When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869682,
			tcgplayer: 675883
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870248,
			tcgplayer: 676908
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870247,
			tcgplayer: 677048
		}
	},
],
}

export default card
