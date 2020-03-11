import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/29/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Double Jet",
			fr: "Jets Doubles",
		},
		text: {
			en: "Discard up to 2 Water Energy cards from your hand. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu’à 2 cartes Énergie Water de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
