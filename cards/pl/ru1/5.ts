import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ru1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Starmie",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/ru1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/ru1/5/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
		},
		text: {
			en: "Remove 1 damage counter from Starmie.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Pokémon Rumble",
		code: "ru1"
	}
}

export default card
