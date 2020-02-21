import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-85",
	localId: 85,

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
			en: "https://assets.tcgdex.net/en/bw/bw1/85/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/85/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/85/high",
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
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 20
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
		name: "Black & White",
		code: "bw1"
	}
}

export default card
