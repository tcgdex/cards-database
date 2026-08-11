import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'es-es': "Smeargle",
		'it-it': "Smeargle",
		'pt-br': "Smeargle",
		'de-de': "Farbeagle"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [235],

	hp: 80,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Live Painting",
			},
			effect: {
				'en-us': "Reveal any number of basic Energy cards from your hand. This attack does 30 more damage for each type of basic Energy you revealed in this way.",
			},
			damage: "30+"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670480,
				tcgplayer: 281500
			}
		}
	]
}

export default card

