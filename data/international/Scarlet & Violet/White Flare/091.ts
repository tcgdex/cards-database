import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [585],
	set: Set,

	name: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'de-de': "Sesokitz",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'es-es': "Deerling",
		'es-mx': "Deerling"
	},

	illustrator: "takashi shiraishi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'es-es': "Patada Trasera",
			'es-mx': "Patada Trasera"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836077,
				tcgplayer: 642206
			}
		},
	],
}

export default card
