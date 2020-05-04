import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-50",
	localId: 50,

	// Card informations
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/50/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/50/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mountain Eater",
			fr: "Mange-montagne",
		},
		text: {
			en: "Discard the top card of your opponent's deck. Then, remove 2 damage counters from Larvitar.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Ensuite, retirez 2 marqueurs de dégât à Embrylex.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque imprudente",
		},
		text: {
			en: "Larvitar does 10 damage to itself.",
			fr: "Embrylex s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
