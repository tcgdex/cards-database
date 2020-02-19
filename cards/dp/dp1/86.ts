import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Machop",
		fr: "Machoc",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/86/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/86/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

