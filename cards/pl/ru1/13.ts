import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ru1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Skuntank",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/ru1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/ru1/13/high",
		},
	},

	evolveFrom: {
		en: "Stunky",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Skuntank.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Pokémon Rumble",
		code: "ru1"
	}
}

export default card
