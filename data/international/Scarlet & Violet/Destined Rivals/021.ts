import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [928],
	set: Set,

	name: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini",
		'de-de': "Olini",
		'it-it': "Smoliv",
		'es-es': "Smoliv",
		'pt-br': "Smoliv",
		'es-mx': "Smoliv"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'it-it': "Carica",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825895,
				tcgplayer: 630805
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825895,
				tcgplayer: 630805
			}
		},
	],
}

export default card
