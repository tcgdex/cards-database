import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'de-de': "Glibunkel",
		'it-it': "Croagunk",
		'es-es': "Croagunk",
		'pt-br': "Croagunk",
		'es-mx': "Croagunk"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [453],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'de-de': "Klatscher",
			'it-it': "Schiaffo",
			'es-es': "Palmetazo",
			'pt-br': "Estalo",
			'es-mx': "Cachetazo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851149,
				tcgplayer: 654417
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851149,
				tcgplayer: 654417
			}
		},
	],
}

export default card
