import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-107",
	localId: 107,

	// Card informations
	name: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 328,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nest Building",
			fr: "Nidification",
		},
		text: {
			en: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
