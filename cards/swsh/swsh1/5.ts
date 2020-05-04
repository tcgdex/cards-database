import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-5",
	localId: 5,

	dexId: 546,

	// Card informations
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/5/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/5/low",
		}
	},

	evolveTo: [{
		en: "Whimsicott",
		fr: "Farfaduvet",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "ryoma uratsuka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Attach",
			fr: "Accrochage",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
