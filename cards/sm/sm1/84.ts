import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Krokorok",
		fr: "Escroco",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 552,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/84/high",
		},
	},

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Off",
			fr: "Sabotage",
		},
		text: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
