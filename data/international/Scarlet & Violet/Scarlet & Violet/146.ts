import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [335],
	set: Set,

	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'es-es': "Zangoose",
		'it-it': "Zangoose",
		'pt-br': "Zangoose",
		'de-de': "Sengo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Yuya Oka",

	description: {
		'en-us': "The eggs it lays are filled with happiness. Eating even one bite will bring a smile to anyone.",
	},

	thirdParty: {
        cardmarket: 702442,
        tcgplayer: 488035
    }
}

export default card