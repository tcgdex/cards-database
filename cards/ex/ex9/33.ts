import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-33",
	localId: 33,

	// Card informations
	name: {
		en: "Kirlia",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/33/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psypunch",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
