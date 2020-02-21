import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-55",
	localId: 55,

	// Card informations
	name: {
		en: "Parasect",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/55/high",
		},
	},

	evolveFrom: {
		en: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Spore",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
