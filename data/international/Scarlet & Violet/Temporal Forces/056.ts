import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [738],
	set: Set,

	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt",
		'de-de': "Donarion"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico",
			'de-de': "Flotter Sprung"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Circuit Cannon",
			'fr-fr': "Canon Circuit",
			'es-es': "Cañón Circuito",
			'it-it': "Circuito Cannone",
			'pt-br': "Canhão Circuito",
			'de-de': "Stromkreiskanone"
		},

		effect: {
			'en-us': "This attack does 80 more damage for each of your Benched Charjabug.",
			'fr-fr': "Cette attaque inflige 80 dégâts supplémentaires pour chacun de vos Chrysapile de Banc.",
			'es-es': "Este ataque hace 80 puntos de daño más por cada uno de tus Charjabug en Banca.",
			'it-it': "Questo attacco infligge 80 danni in più per ogni Charjabug nella tua panchina.",
			'pt-br': "Este ataque causa 80 pontos de dano a mais para cada um dos seus Charjabug no Banco.",
			'de-de': "Diese Attacke fügt für jedes Akkup auf deiner Bank 80 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760686,
				tcgplayer: 542800
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760686,
				tcgplayer: 542800
			}
		},
	],

	illustrator: "Hitoshi Ariga",

}

export default card