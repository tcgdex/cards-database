import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-112",
	localId: 112,

	// Card informations
	name: {
		en: "Gible",
		fr: "Griknot",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
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
