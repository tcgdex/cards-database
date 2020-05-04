import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Herdier",
		fr: "Ponchien",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 507,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/82/high",
		},
	},

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
