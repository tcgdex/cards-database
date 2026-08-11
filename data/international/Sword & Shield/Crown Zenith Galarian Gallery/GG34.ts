import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "Rubbing its fleece generates electricity. You'll want to pet it because it's cute, but if you use your bare hand, you'll get a painful shock.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691913,
				tcgplayer: 478063
			}
		},
	],
}

export default card
