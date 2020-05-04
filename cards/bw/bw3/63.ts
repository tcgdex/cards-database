import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-63",
	localId: 63,

	// Card informations
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 533,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/63/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/63/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/63/high",
		},
	},

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pummel",
			fr: "Martelage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
