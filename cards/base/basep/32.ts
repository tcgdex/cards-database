import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-32",
	localId: 32,

	// Card informations
	name: {
		en: "Smeargle",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Paint",
		},
		text: {
			en: "Flip a coin. If heads, choose a type (other than colorless) and put a Coloring counter on the Defending Pokémon. That Pokémon is now the type you choose. If it already had a Coloring counter, remove the old one. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
