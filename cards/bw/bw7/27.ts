import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-27",
	localId: 27,

	// Card informations
	name: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 554,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/27/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/27/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
