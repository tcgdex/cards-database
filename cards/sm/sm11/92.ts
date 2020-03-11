import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-92",
	localId: 92,

	// Card informations
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 679,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lucky Find",
			fr: "Trouvaille Inespérée",
		},
		text: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
