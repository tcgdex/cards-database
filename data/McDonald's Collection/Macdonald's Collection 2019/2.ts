import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Satoshi Shirai",
	category: "Pokemon",


	dexId: [103],
	description: {
		en: "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tropical Shake"
		},

		damage: "20+",

		effect: {
			en: "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can’t add more than 100 damage in this way."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Alolan Exeggutor"
	},

	rarity: "None",
	hp: 160,
	types: ["Grass"],

	thirdParty: {
		tcgplayer: 200961
	}
}

export default card