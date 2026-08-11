import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pawmo",
		'fr-fr': "Pohmotte",
		'es-es': "Pawmo",
		'es-mx': "Pawmo",
		'de-de': "Pamamo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo"
	},

	evolveFrom: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'es-mx': "Pawmi",
		'de-de': "Pamo",
		'it-it': "Pawmi",
		'pt-br': "Pawmi",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [922],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Electric Punch",
			'fr-fr': "Poing Électrique",
			'es-es': "Puño Eléctrico",
			'es-mx': "Puño Eléctrico",
			'de-de': "Elektroschlag",
			'it-it': "Pugno Elettrico",
			'pt-br': "Murro Elétrico"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
	},

	illustrator: "Taiga Kayama",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857608,
				tcgplayer: 662211,
				cardtrader: 356816
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857608,
				tcgplayer: 662211,
				cardtrader: 356816
			}
		},
	],	
}

export default card
