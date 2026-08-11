import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "Its frail wings are so thin that one can see clear through them. However, during flight these wings exhibit the power to churn air with force enough to launch a house skyward.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658494,
				tcgplayer: 272206
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658494,
				tcgplayer: 272206
			}
		},
	],
}

export default card
