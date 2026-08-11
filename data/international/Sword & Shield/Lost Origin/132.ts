import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [704],
	set: Set,

	name: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10
	}, {
		cost: ["Water", "Metal"],

		name: {
			'en-us': "Melt",
			'fr-fr': "Dissolution",
			'es-es': "Derretir",
			'it-it': "Liquefazione",
			'pt-br': "Derreter",
			'de-de': "Schmelzen"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674144,
				tcgplayer: 284053
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674144,
				tcgplayer: 284053
			}
		},
	],
}

export default card
