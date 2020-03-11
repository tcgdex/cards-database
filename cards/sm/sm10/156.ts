import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-156",
	localId: 156,

	// Card informations
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/156/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/156/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/156/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/156/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
