import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Stufful",
		fr: "Nounourson",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 759,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/111/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/111/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/111/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

