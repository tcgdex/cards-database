import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-45",
	localId: 45,

	// Card informations
	name: {
		en: "Dewgong",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/45/high",
		},
	},

	evolveFrom: {
		en: "Seel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 548,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cold Fat",
		},
		text: {
			en: "As long as Dewgong is Asleep, any damage done to Dewgong by attacks is reduced by 40 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Collapse",
		},
		text: {
			en: "Dewgong is now Asleep.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
