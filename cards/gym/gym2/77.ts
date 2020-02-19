import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Koga's Ekans",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/77/high.png",
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
			Type.GRASS
		],
		name: {
			en: "Fast",
		},
		text: {
			en: "Acting Poison",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card

