import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-19",
	localId: 19,

	// Card informations
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/19/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
