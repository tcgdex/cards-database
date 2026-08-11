import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [859],
	set: Set,

	name: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'de-de': "Bähmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'de-de': "Klatscher"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785948,
				tcgplayer: 567320
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785948,
				tcgplayer: 567320
			}
		},
	],

	illustrator: "Tomokazu Komiya",

}

export default card
