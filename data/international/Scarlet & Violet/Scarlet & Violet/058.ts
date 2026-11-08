import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "It lives in frigid regions in pods of five or so individuals. It loves the minerals found in snow and ice.",
	},

	thirdParty: {
        cardmarket: 702353,
        tcgplayer: 487908
    }
}

export default card