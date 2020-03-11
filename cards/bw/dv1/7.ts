import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/7/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
