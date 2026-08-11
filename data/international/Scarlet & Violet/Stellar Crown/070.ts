import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Paw Shake Punch",
			'fr-fr': "Coup de Patte",
			'es-es': "Sacudir y Dar la Patita",
			'it-it': "Pugno Qua la Zampa",
			'pt-br': "Dá Soquinho",
			'de-de': "Pfötchenhieb"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 50
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
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785924,
				tcgplayer: 567296
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785924,
				tcgplayer: 567296
			}
		},
	],

	illustrator: "Miki Tanaka",

}

export default card
