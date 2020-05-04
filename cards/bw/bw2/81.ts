import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-81",
	localId: 81,

	// Card informations
	name: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 520,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/81/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/81/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/81/high",
		},
	},

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Claw",
			fr: "Ergots",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
