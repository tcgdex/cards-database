import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 582,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/27/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/27/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Icicle Barb",
			fr: "Barbelé de Glace",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
