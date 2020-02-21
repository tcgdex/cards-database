import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Joltik",
		fr: "Statitik",
	},

	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	dexId: 595,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
