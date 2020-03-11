import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-44",
	localId: 44,

	// Card informations
	name: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/44/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/44/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/44/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double Pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
