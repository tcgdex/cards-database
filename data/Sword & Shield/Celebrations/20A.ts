import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		en: "Cleffa",
		fr: "Mélo",
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
				en: "Eeeeeeek",
				fr: "Arheuuuuu",
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 7 cards.",
				fr: "Mélangez votre main avec votre deck, piochez ensuite 7 cartes.",
			},
			cost: [
				"Colorless",
			],
		},
	],

	retreat: 0,

	description: {
		en: "Because of its unusual, star-like silhouette, people believe that it came here on a meteor."
	},

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576779
	}
}

export default card
