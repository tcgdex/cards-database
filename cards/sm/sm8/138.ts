import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-138",
	localId: 138,

	// Card informations
	name: {
		en: "Granbull",
		fr: "Granbull",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 210,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/138/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/138/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/138/high",
		},
	},

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "All Out",
			fr: "À Fond",
		},
		text: {
			en: "If you have no cards in your hand, this attack does 130 more damage.",
			fr: "Si vous n’avez aucune carte dans votre main, cette attaque inflige 130 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Giant Fangs",
			fr: "Crocs Géants",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
