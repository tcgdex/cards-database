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

	illustrator: "OKUBO",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 836010,
				tcgplayer: 642171
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836010,
				tcgplayer: 642171
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836601,
				tcgplayer: 642413
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836602,
				tcgplayer: 642341
			}
		},
	],
}

export default card
