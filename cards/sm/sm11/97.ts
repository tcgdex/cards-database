import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-97",
	localId: 97,

	// Card informations
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 748,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/97/high",
		},
	},

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Spike Shot",
			fr: "Tir d’Épines",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
