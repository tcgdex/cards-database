import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-20",
	localId: 20,

	// Card informations
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 390,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
