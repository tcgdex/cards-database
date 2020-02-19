import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/50/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/50/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/50/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

