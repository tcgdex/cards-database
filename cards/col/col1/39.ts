import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/39/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/39/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/39/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
			fr: "Danse-lames",
		},
		text: {
			en: "During your next turn, Zangoose's Lost Claw attack's base damage is 60.",
			fr: "Pendant votre prochain tour, la Griffe perdue de Mangriff inflige 60 dégâts de base.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lost Claw",
			fr: "Griffe perdue",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and put it in the Lost Zone.",
			fr: "Choisissez au hasard 1 carte dans la main de votre adversaire et placez-la dans la Zone Perdue.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card

