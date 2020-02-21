import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY189",
	localId: "XY189",

	// Card informations
	name: {
		en: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY189/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY189/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
		},
		text: {
			en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Victory Ball",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
