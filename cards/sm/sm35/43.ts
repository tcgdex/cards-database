import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-43",
	localId: 43,

	// Card informations
	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 622,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
