import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dark Guidance",
			fr: "Conseiller Obscur",
		},
		text: {
			en: "Put a Basic Pokémon from your discard pile onto your Bench.",
			fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
