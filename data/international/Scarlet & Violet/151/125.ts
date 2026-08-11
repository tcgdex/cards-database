import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'fr-fr': "Élektek",
		'en-us': "Electabuzz",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Combo Électro",
			'en-us': "Electro Combo",
			'es-es': "Combo Eléctrico",
			'it-it': "Elettrocombo",
			'pt-br': "Eletrocombo",
			'de-de': "Elektrokombo"
		},

		effect: {
			'fr-fr': "Si Magmar est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
			'en-us': "If Magmar is on your Bench, this attack does 40 more damage.",
			'es-es': "Si Magmar está en tu Banca, este ataque hace 40 puntos de daño más.",
			'it-it': "Se Magmar è nella tua panchina, questo attacco infligge 40 danni in più.",
			'pt-br': "Se Magmar estiver no seu Banco, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wenn sich Magmar auf deiner Bank befindet, fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Poing Léger",
			'en-us': "Light Punch",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "With the coming of a storm, many of these Pokémon will gather under tall trees and sit there waiting for lightning to strike.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733720,
				tcgplayer: 516688,
				cardtrader: 261114
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733720,
				tcgplayer: 516688,
				cardtrader: 261114
			}
		},
	],

	illustrator: "NC Empire",

	
}

export default card
