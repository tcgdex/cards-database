import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-87",
	localId: 87,

	// Card informations
	name: {
		en: "Mightyena",
		fr: "Grahyèna",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/87/high",
		},
	},

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Fang",
			fr: "Croc Obscurité",
		},
		text: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
