import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-73",
	localId: 73,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/73/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/73/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
			fr: "Affûtage",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy attached to Porygon and remove 4 damage counters from Porygon.",
			fr: "Défaussez une carte Énergie attachée à Porygon et retirez-lui 4 marqueurs de dégât.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
