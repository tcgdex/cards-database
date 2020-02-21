import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-47",
	localId: 47,

	// Card informations
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/47/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/47/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/47/high",
		},
	},

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 305,
		type: AbilityType.TALENT,
		name: {
			en: "Durable Body",
			fr: "Corps Solide",
		},
		text: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. mais il ne lui reste que 10 PV.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
