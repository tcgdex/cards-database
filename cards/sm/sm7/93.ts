import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-93",
	localId: 93,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Single Smash",
			fr: "Simplécrasement",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
