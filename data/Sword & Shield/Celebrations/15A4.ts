import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		en: "Claydol",
		fr: "Lunala"
	},

	illustrator: "Midori Harada",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Cosmic Power"
		},

		effect: {
			en: "Once during your turn (before your attack), you may choose up to 2 cards from your hand and put them on the bottom of your deck in any order. If you do, draw cards until you have 6 cards in your hand. This power can't be used if Claydol is affected by a Special Condition."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Douleur Lunaire"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576786
	}
}

export default card
