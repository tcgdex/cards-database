import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-58",
	localId: 58,

	// Card informations
	name: {
		en: "Mismagius",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/58/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Absorb Life",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spooky Shot",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
