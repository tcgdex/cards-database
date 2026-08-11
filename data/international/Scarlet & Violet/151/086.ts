import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [86],
	set: Set,

	name: {
		'fr-fr': "Otaria",
		'en-us': "Seel",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
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

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Thanks to its thick fat, cold seas don't bother it at all, but it gets tired pretty easily in warm waters.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733681,
				tcgplayer: 516655,
				cardtrader: 261147
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733681,
				tcgplayer: 516655,
				cardtrader: 261147
			}
		},
	],

	illustrator: "aoki",

	
}

export default card
