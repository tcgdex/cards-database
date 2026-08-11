import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'de-de': "Bähmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 70
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
				cardmarket: 785949,
				tcgplayer: 567321
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785949,
				tcgplayer: 567321
			}
		},
	],

	illustrator: "Mékayu",

}

export default card
