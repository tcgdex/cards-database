import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-13",
	localId: 13,

	// Card informations
	name: {
		en: "Omastar δ",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/13/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Bind",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vengeful Spikes",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex in your discard pile. You can't add more than 60 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
