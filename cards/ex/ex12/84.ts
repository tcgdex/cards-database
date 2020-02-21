import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-84",
	localId: 84,

	// Card informations
	name: {
		en: "Armaldo ex",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/84/high",
		},
	},

	evolveFrom: {
		en: "Anorith",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},

	abilities: [{
		id: 230,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dual Armor",
		},
		text: {
			en: "As long as Armaldo ex has any React Energy cards attached to it, Armaldo ex is both Grass and Fighting type.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
		},
		text: {
			en: "Remove 2 damage counters from Armaldo ex.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
