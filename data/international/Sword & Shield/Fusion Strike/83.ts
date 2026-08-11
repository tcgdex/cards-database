import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [847],
	set: Set,

	name: {
		'en-us': "Barraskewda",
		'fr-fr': "Hastacuda",
		'es-es': "Barraskewda",
		'it-it': "Barraskewda",
		'pt-br': "Barraskewda",
		'de-de': "Barrakiefa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'es-es': "Arrokuda",
		'it-it': "Arrokuda",
		'pt-br': "Arrokuda",
		'de-de': "Pikuda"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Hideki Ishikawa",

	description: {
		'en-us': "It spins its tail fins to propel itself, surging forward at speeds of over 100 knots before ramming prey and spearing into them."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'de-de': "Durchbohren",
			'es-es': "Perforar",
			'pt-br': "Perfurar",
			'it-it': "Perforare"
		},

		damage: 50
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582217,
				tcgplayer: 253237
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582217,
				tcgplayer: 253237
			}
		},
	],
}

export default card
