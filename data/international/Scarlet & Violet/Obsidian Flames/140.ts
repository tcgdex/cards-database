import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [758],
	set: Set,

	name: {
		'fr-fr': "Malamandre",
		'en-us': "Salazzle",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Tritox",
		'en-us': "Salandit",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Gaz Suffocant",
			'en-us': "Suffocating Gas",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Gifle Douce",
			'en-us': "Gentle Slap",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725220,
				tcgplayer: 509912,
				cardtrader: 255825
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725220,
				tcgplayer: 509912,
				cardtrader: 255825
			}
		},
	],

	illustrator: "Shigenori Negishi",

	
}

export default card
