import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-111",
	localId: 111,

	// Card informations
	name: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 231,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Last Resort",
			fr: "Dernier Recours",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
