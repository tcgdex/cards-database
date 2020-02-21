import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 519,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/84/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/84/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
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
		name: "Black & White",
		code: "bw1"
	}
}

export default card
