import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [523],
	set: Set,

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'es-es': "Patada",
			'it-it': "Calcio",
			'pt-br': "Chute",
			'de-de': "Tritt"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico",
			'de-de': "Flotter Sprung"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794343,
				tcgplayer: 590100
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794343,
				tcgplayer: 590100
			}
		},
	],

	illustrator: "Sanosuke Sakuma",
	
}

export default card
