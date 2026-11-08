import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [619],
	set: Set,

	name: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'de-de': "Lin-Fu",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'es-es': "Mienfoo",
		'es-mx': "Mienfoo"
	},

	illustrator: "Keisin",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'de-de': "Tritt",
			'it-it': "Calcio",
			'pt-br': "Chute",
			'es-es': "Patada",
			'es-mx': "Patada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835997,
				tcgplayer: 642164
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835997,
				tcgplayer: 642164
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836587,
				tcgplayer: 642406
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836588,
				tcgplayer: 642334
			}
		},
	],
}

export default card
