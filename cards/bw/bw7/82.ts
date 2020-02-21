import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-82",
	localId: 82,

	// Card informations
	name: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 296,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/82/high",
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
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Slap Push",
			fr: "Grande Claque",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
