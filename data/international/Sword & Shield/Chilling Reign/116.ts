import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Sharpen",
			'fr-fr': "Affûtage",
			'es-es': "Afilar",
			'it-it': "Affilatore",
			'pt-br': "Afiar",
			'de-de': "Schärfer"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It was built 20 years ago by scientists who dreamed of exploring space. Their dreams have yet to come true."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567224,
				tcgplayer: 241793
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567224,
				tcgplayer: 241793
			}
		},
	],
}

export default card
