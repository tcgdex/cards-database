import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Hitmontop",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Spin",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, switch Hitmontop with one of your Benched Pokémon, if any. .",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
