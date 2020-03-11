import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 502,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/29/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/29/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/29/high",
		},
	},

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Razor Shell",
			fr: "Coquilame",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
