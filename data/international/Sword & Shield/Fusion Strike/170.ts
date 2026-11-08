import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		'en-us': "If a normally talkative child suddenly stops talking, it may have been replaced by Zorua."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'de-de': "Rückwärtskick",
			'es-es': "Patada Trasera",
			'pt-br': "Chute Traseiro",
			'it-it': "Retrocalcio"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582798,
				tcgplayer: 253384
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582798,
				tcgplayer: 253384
			}
		},
	],
}

export default card
