import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-52",
	localId: 52,

	// Card informations
	name: {
		en: "Lombre",
		fr: "Lombre",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 271,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/52/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/52/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/52/high",
		},
	},

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
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
			en: "Interrupt",
			fr: "Interruption",
		},
		text: {
			en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck.",
			fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez-y une carte. Ensuite, demandez à votre adversaire de la mélanger à son deck.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle douce",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
