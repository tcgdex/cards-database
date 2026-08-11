import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon generates electricity by contracting its muscles. Excited trembling is a sign that Shinx is generating a tremendous amount of electricity.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608499,
				tcgplayer: 263755
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608499,
				tcgplayer: 263755
			}
		},
	],
}

export default card
