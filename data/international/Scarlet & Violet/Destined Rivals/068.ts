import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'de-de': "Elektek",
		'it-it': "Electabuzz",
		'es-es': "Electabuzz",
		'pt-br': "Electabuzz",
		'es-mx': "Electabuzz"
	},


	illustrator: "Amelicart",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electroslug",
			'fr-fr': "Électro Frappe",
			'de-de': "Elektroschuss",
			'it-it': "Elettropugno",
			'es-es': "Electropuñetazo",
			'pt-br': "Soco Elétrico",
			'es-mx': "Electropuñetazo"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825942,
				tcgplayer: 632881
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825942,
				tcgplayer: 632881
			}
		},
	],
}

export default card
