import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [780],
	set: Set,

	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'de-de': "Sen-Long",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'es-mx': "Drampa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'de-de': "Drachenklaue",
			'it-it': "Dragartigli",
			'pt-br': "Garra de Dragão",
			'es-mx': "Garra Dragón"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Tetsu Kayama",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817282,
				tcgplayer: 623557
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817282,
				tcgplayer: 623557
			}
		},
	],
}

export default card
