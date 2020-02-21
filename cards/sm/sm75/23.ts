import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-23",
	localId: 23,

	// Card informations
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 159,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/23/high",
		},
	},

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sweep Away",
			fr: "Nettoyage",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
