import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-110",
	localId: 110,

	// Card informations
	name: {
		en: "Scorched Earth",
		fr: "Terre Brûlée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/110/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/110/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut défausser une carte Énergie Fire ou Fighting de sa main. Dans ce cas, le joueur pioche 2 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
