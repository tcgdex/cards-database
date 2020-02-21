import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-62",
	localId: 62,

	// Card informations
	name: {
		en: "Machop",
		fr: "Machoc",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Dual Chop",
			fr: "Double Baffe",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
