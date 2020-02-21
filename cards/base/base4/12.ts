import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Nidoqueen",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/12/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Boyfriends",
		},
		text: {
			en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
