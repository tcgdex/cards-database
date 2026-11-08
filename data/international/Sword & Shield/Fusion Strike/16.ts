import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [708],
	set: Set,

	name: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		'en-us': "With a voice like a human child's, it cries out to lure adults deep into the forest, getting them lost among the trees."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'de-de': "Samenbomben",
			'es-es': "Bomba Germen",
			'pt-br': "Bomba de Sementes",
			'it-it': "Semebomba"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582059,
				tcgplayer: 253094
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582059,
				tcgplayer: 253094
			}
		},
	],
}

export default card
