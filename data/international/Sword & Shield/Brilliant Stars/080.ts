import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [538],
	set: Set,

	name: {
		'en-us': "Throh",
		'fr-fr': "Judokrak",
		'es-es': "Throh",
		'it-it': "Throh",
		'pt-br': "Throh",
		'de-de': "Jiutesto"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'de-de': "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'pt-br': "Arremesso Sísmico",
			'de-de': "Geowurf"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It performs throwing moves with first-rate skill. Over the course of many battles, Throh's belt grows darker as it absorbs its wearer's sweat.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608530,
				tcgplayer: 263796
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608530,
				tcgplayer: 263796
			}
		},
	],
}

export default card
