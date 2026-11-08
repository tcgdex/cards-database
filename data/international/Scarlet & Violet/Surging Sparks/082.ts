import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Petty Grudge",
			'fr-fr': "Rancune Mesquine",
			'es-es': "Rencor Ruin",
			'it-it': "Rancormeschino",
			'pt-br': "Rancinho",
			'de-de': "Mini-Groll"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794382,
				tcgplayer: 590097
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794382,
				tcgplayer: 590097
			}
		},
	],

	illustrator: "IKEDA Saki",
	
}

export default card
