import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-32",
	localId: 32,

	// Card informations
	name: {
		en: "Pignite",
		fr: "Grotichon",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 499,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/32/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/32/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/32/high.png",
		},
	},

	evolveFrom: {
		en: "Tepig",
		fr: "Gruikui",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

