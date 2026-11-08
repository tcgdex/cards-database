import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		501,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Razor Shell",
				'fr-fr': "Coquilame",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The scalchop on its stomach is made from the same elements as claws. It detaches the scalchop for use as a blade.",
	},

	thirdParty: {
		cardmarket: 279765,
		tcgplayer: 87891
	}
}

export default card
