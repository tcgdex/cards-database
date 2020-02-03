import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-5",
	localId: 5,

	// Card informations
	name: {
		en: "Milotic δ",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/5/high.png",
		},
	},

	evolveFrom: {
		en: "Feebas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 103,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sharing",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this power. (The Supporter card remains in your opponent's hand.) You can't use more than 1 Sharing Poké-Power each turn. This power can't be used if Milotic is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card

