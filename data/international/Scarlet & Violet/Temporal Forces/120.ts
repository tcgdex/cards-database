import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		'en-us': "Koraidon ex",
		'fr-fr': "Koraidon-ex",
		'es-es': "Koraidon ex",
		'it-it': "Koraidon-ex",
		'pt-br': "Koraidon ex",
		'de-de': "Koraidon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Retribution Strike",
			'fr-fr': "Frappe Représailles",
			'es-es': "Golpe Vengativo",
			'it-it': "Colpo Punitivo",
			'pt-br': "Golpe de Retribuição",
			'de-de': "Racheschlag"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fire", "Fighting", "Fighting"],

		name: {
			'en-us': "Kaiser Tackle",
			'fr-fr': "Charge Impériale",
			'es-es': "Placaje Káiser",
			'it-it': "Azione Imperiale",
			'pt-br': "Colisão do Imperador",
			'de-de': "Kaiser-Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 280
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760750,
				tcgplayer: 542864
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Igarashi",

}

export default card