import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-63",
	localId: 63,

	// Card informations
	name: {
		en: "Tyrogue",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 236,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/63/high",
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
			Type.FIGHTING
		],
		name: {
			en: "Energy Punch",
		},
		text: {
			en: "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
