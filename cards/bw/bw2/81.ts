import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw2/81/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/81/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/81/high.png",
		},
	},

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card

