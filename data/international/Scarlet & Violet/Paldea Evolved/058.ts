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
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Glacial",
			'en-us': "Chilly",
			'es-es': "Fresquito",
			'it-it': "Addiaccio",
			'pt-br': "Frio",
			'de-de': "Frösteln"
		},

		damage: 10
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715533,
				tcgplayer: 497469,
				cardtrader: 248669
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 785461
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715533,
				tcgplayer: 497469,
				cardtrader: 248669
			}
		},
	],

	illustrator: "AKIRA EGAWA",

	description: {
		'en-us': "Frigibax absorbs heat through its dorsal fin and converts the heat into ice energy. The higher the temperature, the more energy Frigibax stores.",
	},
}

export default card
