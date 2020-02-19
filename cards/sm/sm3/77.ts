import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-77",
	localId: 77,

	// Card informations
	name: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 749,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/77/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/77/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

