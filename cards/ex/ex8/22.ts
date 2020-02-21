import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-22",
	localId: 22,

	// Card informations
	name: {
		en: "Rayquaza",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},

	abilities: [{
		id: 411,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dragon Aura",
		},
		text: {
			en: "As long as Rayquaza has any basic Fire Energy cards and any basic Lightning Energy cards attached to it, prevent all effects, except damage, by an opponent's attack done to Rayquaza.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
