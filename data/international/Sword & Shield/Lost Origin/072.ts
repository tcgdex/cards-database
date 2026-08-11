import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [353],
	set: Set,

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Tongue Slap",
			'fr-fr': "Gros Coup de Langue",
			'es-es': "Bofetón Lengua",
			'it-it': "Linguasberla",
			'pt-br': "Tapa de Língua",
			'de-de': "Zungenschelle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674081,
				tcgplayer: 283949
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674081,
				tcgplayer: 283949
			}
		},
	],
}

export default card
