import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-82",
	localId: 82,

	// Card informations
	name: {
		en: "Skorupi",
		fr: "Rapion",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 451,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



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
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
