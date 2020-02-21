import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Dugtrio",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/19/high",
		},
	},

	evolveFrom: {
		en: "Diglett",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Earthquake",
		},
		text: {
			en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
