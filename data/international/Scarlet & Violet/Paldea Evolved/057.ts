import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [996],
	set: Set,

	name: {
		'fr-fr': "Frigodo",
		'en-us': "Frigibax",
		'es-es': "Frigibax",
		'it-it': "Frigibax",
		'pt-br': "Frigibax",
		'de-de': "Frospino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715532,
				tcgplayer: 497468,
				cardtrader: 248645
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715532,
				tcgplayer: 497468,
				cardtrader: 248645
			}
		},
	],

	illustrator: "Akira Komayama",

	description: {
		'en-us': "Frigibax absorbs heat through its dorsal fin and converts the heat into ice energy. The higher the temperature, the more energy Frigibax stores.",
	},
}

export default card
