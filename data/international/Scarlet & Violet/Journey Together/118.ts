import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [161],
	set: Set,

	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'de-de': "Wiesor",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'es-mx': "Sentret"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'de-de': "Klatscher",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'es-mx': "Cachetazo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Taiga Kayama",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817270,
				tcgplayer: 623545
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817270,
				tcgplayer: 623545
			}
		},
	],
}

export default card
