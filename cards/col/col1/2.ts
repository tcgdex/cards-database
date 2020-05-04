import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/2/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/2/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Cell Storm",
			fr: "Tempête cellulaire",
		},
		text: {
			en: "Discard 2 Psychic Energy attached to Deoxys and remove 6 damage counters from Deoxys.",
			fr: "Défaussez 2 Énergies Psychic attachées à Deoxys et retirez-lui 6 marqueurs de dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
