import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Claydol"
	},

	illustrator: "Midori Harada",
	rarity: "None",
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
			en: "Spinning Attack"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
