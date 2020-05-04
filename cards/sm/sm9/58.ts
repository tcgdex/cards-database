import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-58",
	localId: 58,

	// Card informations
	name: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/58/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal’Korne",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
