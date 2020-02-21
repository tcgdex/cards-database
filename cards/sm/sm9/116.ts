import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-116",
	localId: 116,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/116/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/116/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Rage",
			fr: "Draco-Rage",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
