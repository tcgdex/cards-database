import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Tyrogue",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 236,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
		},
		text: {
			en: "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
		}
	}],

	attacks: [{
		name: {
			en: "Mischievous Punch",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance. Tyrogue is now Asleep.",
		},
		damage: 30
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
