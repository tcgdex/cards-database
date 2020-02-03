import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY63",
	localId: "XY63",

	// Card informations
	name: {
		en: "M Absol-EX",
		fr: "M Absol-EX",
	},

	hp: 210,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY63/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY63/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY63/high.png",
		},
	},

	evolveFrom: {
		en: "Absol-EX",
		fr: "Absol-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Disaster Wing",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "Discard the top card of your opponent's deck. If that card is a Trainer card, this attack does 80 more damage.",
		},
		damage: 80
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			fr: "Aile du Désastre",
		},
		text: {
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Si c'est une carte Dresseur, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: "80＋"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

