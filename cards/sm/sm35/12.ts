import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-12",
	localId: 12,

	// Card informations
	name: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 636,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/12/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/12/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

