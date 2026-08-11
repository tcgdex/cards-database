import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano",
		'it-it': "Growlithe",
		'es-es': "Growlithe",
		'pt-br': "Growlithe",
		'es-mx': "Growlithe"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'de-de': "Glühende Kohlen",
			'it-it': "Carboni Ardenti",
			'es-es': "Carbón Activado",
			'pt-br': "Carvão Vivo",
			'es-mx': "Carbón Activado"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'de-de': "Schaufelkrallen",
			'it-it': "Scavazanne",
			'es-es': "Hundir Garras",
			'pt-br': "Fincar Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825900,
				tcgplayer: 632850
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825900,
				tcgplayer: 632850
			}
		},
	],
}

export default card
