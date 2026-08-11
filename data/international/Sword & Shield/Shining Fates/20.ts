import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		'fr-fr': "Hypotrempe",
		'en-us': "Horsea",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Pistolet à O",
			'en-us': "Water Gun",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	regulationMark: "E",
	retreat: 0,


	stage: "Basic",

	description: {
		'en-us': "It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539123,
				tcgplayer: 232409
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539123,
				tcgplayer: 232409
			}
		},
	],
}

export default card
