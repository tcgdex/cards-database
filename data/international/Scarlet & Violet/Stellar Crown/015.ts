import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785868,
				tcgplayer: 567241
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785868,
				tcgplayer: 567241
			}
		},
	],

	illustrator: "HYOGONOSUKE",

}

export default card
