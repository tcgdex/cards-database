import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [568],
	set: Set,

	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'de-de': "Unratütox",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'es-es': "Trubbish",
		'es-mx': "Trubbish"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Drool",
			'fr-fr': "Gluant",
			'de-de': "Sabbern",
			'it-it': "Sbavare",
			'pt-br': "Babar",
			'es-es': "Babeo",
			'es-mx': "Babeo"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Sludge Bomb",
			'fr-fr': "Bombe Beurk",
			'de-de': "Matschbombe",
			'it-it': "Fangobomba",
			'pt-br': "Bomba de Lodo",
			'es-es': "Bomba Lodo",
			'es-mx': "Bomba Lodo"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836164,
				tcgplayer: 642253
			}
		},
	],
}

export default card
