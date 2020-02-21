import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-76",
	localId: 76,

	// Card informations
	name: {
		en: "Chansey",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 113,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/76/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scrunch",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Chansey by attacks during your opponent's next turn.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Chansey does 60 damage to itself.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
