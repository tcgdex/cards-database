import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			name: {
				'en-us': "Eeeeeeek",
				'fr-fr': "Arheuuuuu",
			},
			effect: {
				'en-us': "Shuffle your hand into your deck, then draw 7 cards.",
				'fr-fr': "Mélangez votre main avec votre deck, piochez ensuite 7 cartes.",
			},
			cost: [
				"Colorless",
			],
		},
	],

	retreat: 0,

	description: {
		'en-us': "Because of its unusual, star-like silhouette, people believe that it came here on a meteor."
	},


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576779,
				tcgplayer: 250326
			}
		},
	],
}

export default card
