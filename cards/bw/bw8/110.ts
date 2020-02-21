import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-110",
	localId: 110,

	// Card informations
	name: {
		en: "Patrat",
		fr: "Ratentif",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 504,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/110/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/110/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
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
			fr: "Ce Pokémon s'inflige 10 dégâts.",
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
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
