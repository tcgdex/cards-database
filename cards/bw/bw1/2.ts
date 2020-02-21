import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Snivy",
		fr: "Vipélierre",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 495,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/2/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/2/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Blade",
			fr: "Lame-Feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
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
