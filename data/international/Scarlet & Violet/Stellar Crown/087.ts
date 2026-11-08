import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [739],
	set: Set,

	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Crabhammer",
			'fr-fr': "Pince-Masse",
			'es-es': "Martillazo",
			'it-it': "Martellata",
			'pt-br': "Martelo Caranguejo",
			'de-de': "Krabbhammer"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785941,
				tcgplayer: 567313
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785941,
				tcgplayer: 567313
			}
		},
	],

	illustrator: "Scav",

}

export default card
