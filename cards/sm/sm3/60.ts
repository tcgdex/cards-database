import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 678,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/60/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/60/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/60/high.png",
		},
	},

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Allure",
			fr: "Allure",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hand Kinesis",
			fr: "Télékinésie en Main",
		},
		text: {
			en: "This attack does 10 damage for each card in your hand.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

