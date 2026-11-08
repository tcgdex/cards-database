import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		'en-us': "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'es-es': "Roer",
			'pt-br': "Roída",
			'it-it': "Rosicchiamento"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electric Claws",
			'fr-fr': "Griffes Électriques",
			'de-de': "Elektrokrallen",
			'es-es': "Garras Eléctricas",
			'pt-br': "Garras Elétricas",
			'it-it': "Artigli Elettrici"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582483,
				tcgplayer: 253247
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582483,
				tcgplayer: 253247
			}
		},
	],
}

export default card
