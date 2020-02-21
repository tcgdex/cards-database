import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Zorua",
		fr: "Zorua",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 570,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/66/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/66/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
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
