import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Bellsprout",
		'fr-fr': "Chétiflor d'Erika",
		'es-es': "Bellsprout de Erika",
		'es-mx': "Bellsprout de Erika",
		'de-de': "Erikas Knofensa",
		'it-it': "Bellsprout di Erika",
		'pt-br': "Bellsprout da Érica"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Vine Slap",
			'fr-fr': "Gifle de Liane",
			'es-es': "Bofetón Látigo",
			'es-mx': "Lianazo",
			'de-de': "Rankenklatscher",
			'it-it': "Lianasberla",
			'pt-br': "Tapa de Vinhas"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869615,
				tcgplayer: 675816
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 870140,
				tcgplayer: 676854
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870139,
				tcgplayer: 676994
			}
		},
	],
}

export default card
