import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/21/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/21/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/21/high.png",
		},
	},

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
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
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Magma Mantle",
			fr: "Manteau de Magma",
		},
		text: {
			en: "You may discard the top card of your deck. If that card is a Fire Energy card, this attack does 50 more damage.",
			fr: "Vous pouvez défausser la carte du dessus de votre deck. Si cette carte est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires.",
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
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

