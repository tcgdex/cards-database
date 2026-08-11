import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		'fr-fr': "Magmar",
		'en-us': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Charbon Mutant",
			'en-us': "Live Coal",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Combo Flamboyant",
			'en-us': "Flare Combo",
			'es-es': "Combo Flamígero",
			'it-it': "Fiammacombo",
			'pt-br': "Flamacombo",
			'de-de': "Flammenkombo"
		},

		effect: {
			'fr-fr': "Si Élektek est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			'en-us': "If Electabuzz is on your Bench, this attack does 80 more damage.",
			'es-es': "Si Electabuzz está en tu Banca, este ataque hace 80 puntos de daño más.",
			'it-it': "Se Electabuzz è nella tua panchina, questo attacco infligge 80 danni in più.",
			'pt-br': "Se Electabuzz estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn sich Elektek auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "These Pokémon's bodies are constantly burning. Magmar are feared as one of the causes behind fires.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733721,
				tcgplayer: 516689,
				cardtrader: 261131
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733721,
				tcgplayer: 516689,
				cardtrader: 261131
			}
		},
	],

	illustrator: "Toshinao Aoki",

	
}

export default card
