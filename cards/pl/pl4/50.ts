import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-50",
	localId: 50,

	// Card informations
	name: {
		en: "Wormadam Sandy Cloak",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/50/high",
		},
	},

	evolveFrom: {
		en: "Burmy Sandy Cloak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hang Down",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cloak Headbutt",
		},
		text: {
			en: "If you have Wormadam Trash Cloak in play, this attack does 60 damage plus 30 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
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
