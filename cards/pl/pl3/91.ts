import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-91",
	localId: 91,

	// Card informations
	name: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 399,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/91/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/91/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Whimsy Tackle",
			fr: "Charge capricieuse",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
