import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-80",
	localId: 80,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/80/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/80/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/80/high.png",
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
			Type.DARKNESS
		],
		name: {
			en: "Limitation",
			fr: "Restriction",
		},
		text: {
			en: "Your opponent can't play any Supporter cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	}],





	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

