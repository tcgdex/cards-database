import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'fr-fr': "Chochodile",
		'en-us': "Fuecoco",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715507,
				tcgplayer: 497445,
				cardtrader: 248615
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715507,
				tcgplayer: 497445,
				cardtrader: 248615
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
}

export default card
