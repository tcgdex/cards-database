import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL10",
	localId: "SL10",

	// Card informations
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/SL10/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL10/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Noriko Hotta",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Inferno Spear",
			fr: "Lance infernale",
		},
		text: {
			en: "Discard a Fire Energy and a Lightning Energy attached to Rayquaza.",
			fr: "Défaussez une Énergie Fire et une Énergie Lightning attachées à Rayquaza.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
