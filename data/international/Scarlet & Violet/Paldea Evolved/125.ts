import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		'fr-fr': "Germéclat",
		'en-us': "Glimmet",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Jet-Pierres",
			'en-us': "Rock Throw",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715600,
				tcgplayer: 497540,
				cardtrader: 248772
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715600,
				tcgplayer: 497540,
				cardtrader: 248772
			}
		},
	],

	illustrator: "Sekio",

	description: {
		'en-us': "It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",
	},
}

export default card
