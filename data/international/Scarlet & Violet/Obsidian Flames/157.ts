import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

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
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Coud'Queue Sec",
			'en-us': "Tail Snap",
			'es-es': "Pinza Cola",
			'it-it': "Schioccacoda",
			'pt-br': "Surpresa de Cauda",
			'de-de': "Schweifhieb"
		},

		damage: 20
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
				cardmarket: 725237,
				tcgplayer: 509636,
				cardtrader: 255842
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725237,
				tcgplayer: 509636,
				cardtrader: 255842
			}
		},
	],

	illustrator: "satoma",

	
}

export default card
