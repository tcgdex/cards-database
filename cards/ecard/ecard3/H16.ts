import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H16",
	localId: "H16",

	// Card informations
	name: {
		en: "Magcargo",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H16/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eruption",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Energy card discarded in this way.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Stream",
		},
		text: {
			en: "Discard a Energy card attached to Magcargo in order to use this attack. If your opponent has any Benched Pokémon, this attack does 10 damage to each of them. (Don't apply Weakness or Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
