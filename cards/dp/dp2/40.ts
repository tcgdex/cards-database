import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Whiscash",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 340,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/40/high",
		},
	},

	evolveFrom: {
		en: "Barboach",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury",
		},
		text: {
			en: "Does 20 damage times the number of damage counters on Whiscash.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnitude",
		},
		text: {
			en: "Does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
