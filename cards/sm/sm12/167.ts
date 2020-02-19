import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-167",
	localId: 167,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/167/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/167/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/167/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/167/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Follow My Tail",
			fr: "À la Queuleuleu",
		},
		text: {
			en: "Search your deck for any number of Eevee and Eevee-GX and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez autant d’Évoli et Évoli-GX que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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

