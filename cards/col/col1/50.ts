import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Riolu",
		fr: "Riolu",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 447,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/50/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/50/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 68,
		name: "Takashi Yamaguchi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Tumble Over",
			fr: "Culbuter",
		},
		text: {
			en: "Riolu can't attack during your next turn.",
			fr: "Riolu ne peut pas attaquer lors de votre prochain tour.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
