import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM143",
	localId: "SM143",

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM143/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM143/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 70
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Attack",
			fr: "Piqué",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 150
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
