import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-107",
	localId: 107,

	// Card informations
	name: {
		en: "Patrat",
		fr: "Ratentif",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 504,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glance",
			fr: "Coup d’Œil",
		},
		text: {
			en: "Look at the top card of your opponent's deck.",
			fr: "Regardez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
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
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
