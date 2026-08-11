import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
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
	illustrator: "OKACHEKE",
	description: {
		'en-us': "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751804,
				tcgplayer: 537818
			},
		}
	],
}

export default card
