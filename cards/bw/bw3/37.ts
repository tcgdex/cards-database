import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-37",
	localId: 37,

	// Card informations
	name: {
		en: "Emolga",
		fr: "Emolga",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 587,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/37/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/37/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electrichain",
			fr: "Électrichaîne",
		},
		text: {
			en: "Does 20 more damage if you have any Lightning Pokémon on your Bench.",
			fr: "Inflige 20 dégâts supplémentaires si vous avez un Pokémon Lightning sur votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
