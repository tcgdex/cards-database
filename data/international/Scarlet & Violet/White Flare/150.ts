import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'de-de': "Fermicula",
		'it-it': "Durant",
		'pt-br': "Durant",
		'es-es': "Durant",
		'es-mx': "Durant"
	},

	illustrator: "Scav",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bite Together",
			'fr-fr': "Morsure Commune",
			'de-de': "Kollektiver Biss",
			'it-it': "Morso Collettivo",
			'pt-br': "Mordida em Bando",
			'es-es': "Mordedura Conjunta",
			'es-mx': "Mordida Conjunta"
		},

		effect: {
			'en-us': "If Durant is on your Bench, this attack does 20 more damage.",
			'fr-fr': "Si Fermite est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
			'de-de': "Wenn sich Fermicula auf deiner Bank befindet, fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Se Durant è nella tua panchina, questo attacco infligge 20 danni in più.",
			'pt-br': "Se Durant estiver no seu Banco, este ataque causará 20 pontos de dano a mais.",
			'es-es': "Si Durant está en tu Banca, este ataque hace 20 puntos de daño más.",
			'es-mx': "Si Durant está en tu Banca, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'de-de': "Klammer",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'es-es': "Agarre",
			'es-mx': "Fuerza de Garra"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836184,
				tcgplayer: 642264
			}
		},
	],
}

export default card
