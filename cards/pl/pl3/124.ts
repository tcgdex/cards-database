import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-124",
	localId: 124,

	// Card informations
	name: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 27,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/124/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/124/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
