import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-34",
	localId: 34,

	// Card informations
	name: {
		en: "Lombre",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 271,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/34/high",
		},
	},

	evolveFrom: {
		en: "Lotad",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 22,
		type: AbilityType.POKEBODY,
		name: {
			en: "Natural Cure",
		},
		text: {
			en: "When you attach a Water Energy card from your hand to Lombre, remove all Special Conditions from Lombre.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blot",
		},
		text: {
			en: "Remove 2 damage counters from Lombre.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
