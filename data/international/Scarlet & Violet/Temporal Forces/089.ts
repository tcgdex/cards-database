import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Paw Shake Punch",
			'fr-fr': "Coup de Patte",
			'es-es': "Sacudir y Dar la Patita",
			'it-it': "Pugno Qua la Zampa",
			'pt-br': "Dá Soquinho",
			'de-de': "Pfötchenhieb"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760719,
				tcgplayer: 542833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760719,
				tcgplayer: 542833
			}
		},
	],

	illustrator: "sui",

}

export default card