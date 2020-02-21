import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Electrode",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/18/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Chain Lightning",
		},
		text: {
			en: "If the Defending Pokémon isn't Colorless, this attack does 10 damage to each Benched Pokémon of the same type as the Defending Pokémon (including your own).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
