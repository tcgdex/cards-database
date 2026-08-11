import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [109],
	set: Set,

	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'de-de': "Smogon",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'es-mx': "Koffing"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Suffocating Gas",
			'fr-fr': "Gaz Suffocant",
			'es-es': "Gas Sofocante",
			'de-de': "Würgegas",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'es-mx': "Gas Sofocante"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Rond",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817243,
				tcgplayer: 623518
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817243,
				tcgplayer: 623518
			}
		},
	],
}

export default card
