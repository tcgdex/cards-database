import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-17",
	localId: 17,

	// Card informations
	name: {
		en: "Tyranitar",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/17/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Payback",
		},
		text: {
			en: "If your opponent has only 1 Prize card left, this attack does 40 damage plus 40 more damage and discard the top 3 cards from your opponent's deck.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Ground Burn",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 80 damage plus 20 more damage for each Energy card discarded in this way.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
