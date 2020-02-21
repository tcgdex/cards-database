import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-43",
	localId: 43,

	// Card informations
	name: {
		en: "Shinx",
		fr: "Lixy",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 403,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/43/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/43/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/43/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
