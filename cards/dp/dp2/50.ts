import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-50",
	localId: 50,

	// Card informations
	name: {
		en: "Golbat",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/50/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kazuyuki Kano",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pulse Search",
		},
		text: {
			en: "Look at your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
