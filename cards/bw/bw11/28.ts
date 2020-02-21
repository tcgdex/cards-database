import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-28",
	localId: 28,

	// Card informations
	name: {
		en: "Reshiram",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Outrage",
		},
		text: {
			en: "Does 10 more damage for each damage counter on this Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Blue Flare",
		},
		text: {
			en: "Discard 2 Fire Energy attached to this Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
