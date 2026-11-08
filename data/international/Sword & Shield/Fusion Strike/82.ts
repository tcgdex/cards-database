import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [846],
	set: Set,

	name: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'es-es': "Arrokuda",
		'it-it': "Arrokuda",
		'pt-br': "Arrokuda",
		'de-de': "Pikuda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Miki Tanaka",

	description: {
		'en-us': "After it's eaten its fill, its movements become extremely sluggish. That's when Cramorant swallows it up."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'de-de': "Pikser",
			'es-es': "Picotazo",
			'pt-br': "Bicada",
			'it-it': "Beccata"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582216,
				tcgplayer: 253236
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582216,
				tcgplayer: 253236
			}
		},
	],
}

export default card
