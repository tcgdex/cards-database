import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [147],
	set: Set,

	name: {
		'fr-fr': "Minidraco",
		'en-us': "Dratini",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Bataille",
			'en-us': "Beat",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Water", "Lightning"],

		name: {
			'fr-fr': "Fouet Draconien",
			'en-us': "Draconic Whip",
			'es-es': "Látigo Dracónico",
			'it-it': "Frustata del Drago",
			'pt-br': "Chicote Dracônico",
			'de-de': "Drachenpeitsche"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733742,
				tcgplayer: 516710,
				cardtrader: 261110
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733742,
				tcgplayer: 516710,
				cardtrader: 261110
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	
}

export default card
