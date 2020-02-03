import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-148",
	localId: 148,

	// Card informations
	name: {
		en: "Kingdra",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/148/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/148/high.png",
		},
	},

	evolveFrom: {
		en: "Seadra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 154,
		name: "Mikio Menjo"
	},

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aquabomb",
		},
		text: {
			en: "Kingdra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Dual Burn",
		},
		text: {
			en: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

