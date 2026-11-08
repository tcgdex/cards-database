import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "REND",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780895,
				tcgplayer: 560317
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780895,
				tcgplayer: 560317
			}
		},
	],
}

export default card
