import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Smoochum",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 238,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Kiss",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy cards on the Defending Pokémon. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
