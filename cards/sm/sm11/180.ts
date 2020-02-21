import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-180",
	localId: 180,

	// Card informations
	name: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 734,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/180/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/180/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/180/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/180/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cavernous Chomp",
			fr: "Mâchoire Caverneuse",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
