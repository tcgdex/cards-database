import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [320],
	set: Set,

	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'de-de': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'es-mx': "Wailmer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'de-de': "Surfer",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'es-mx': "Surf"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Shinya Mizuno",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817192,
				tcgplayer: 623467
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817192,
				tcgplayer: 623467
			}
		},
	],
}

export default card
