import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-45",
	localId: 45,

	// Card informations
	name: {
		en: "Pelipper",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/45/high",
		},
	},

	evolveFrom: {
		en: "Wingull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Water Ball",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Water Energy attached to Pelipper.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
