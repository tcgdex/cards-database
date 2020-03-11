import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-19",
	localId: 19,

	// Card informations
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 608,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/19/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/19/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/19/high",
		},
	},

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
