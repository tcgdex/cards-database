import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo",
		'es-es': "Keldeo",
		'it-it': "Keldeo",
		'pt-br': "Keldeo",
		'de-de': "Keldeo"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Four as One",
			'fr-fr': "Quatre pour Un",
			'es-es': "Cuatro para Uno",
			'it-it': "Tetrasintonia",
			'pt-br': "Quatro em Um",
			'de-de': "Viererpakt"
		},

		effect: {
			'en-us': "If Cobalion, Terrakion, and Virizion are on your Bench, this attack does 170 more damage.",
			'fr-fr': "Si Cobaltium, Terrakium et Viridium sont sur votre Banc, cette attaque inflige 170 dégâts supplémentaires.",
			'es-es': "Si Cobalion, Terrakion y Virizion están en tu Banca, este ataque hace 170 puntos de daño más.",
			'it-it': "Se Cobalion, Terrakion e Virizion sono nella tua panchina, questo attacco infligge 170 danni in più.",
			'pt-br': "Se Cobalion, Terrakion e Virizion estiverem no seu Banco, este ataque causará 170 pontos de dano a mais.",
			'de-de': "Wenn sich Kobalium, Terrakium und Viridium auf deiner Bank befinden, fügt diese Attacke 170 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682093,
				tcgplayer: 451690
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682093,
				tcgplayer: 451690
			}
		},
	],
}

export default card
