import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [942],
	set: Set,

	name: {
		'en-us': "Arven's Maschiff",
		'fr-fr': "Grondogue de Pepper",
		'de-de': "Peppers Mobtiff",
		'it-it': "Maschiff di Pepe",
		'es-es': "Maschiff de Damián",
		'pt-br': "Maschiff do Arven",
		'es-mx': "Maschiff de Damián"
	},


	illustrator: "Mina Nakai",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'es-es': "Estampida",
			'pt-br': "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'de-de': "Konfrontieren",
			'it-it': "Confronto",
			'es-es': "Confrontar",
			'pt-br': "Confrontar",
			'es-mx': "Confrontar"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826012,
				tcgplayer: 632945
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826012,
				tcgplayer: 632945
			}
		},
	],
}

export default card
