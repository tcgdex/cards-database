import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		'fr-fr': "Mustéflott",
		'en-us': "Floatzel",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'pt-br': "Floatzel",
		'de-de': "Bojelin"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Mustébouée",
		'en-us': "Buizel"
	},

	attacks: [{
		name: {
			'fr-fr': "Surf",
			'en-us': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'de-de': "Surfer"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539138,
				tcgplayer: 232419
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539138,
				tcgplayer: 232419
			}
		},
	],
}

export default card
