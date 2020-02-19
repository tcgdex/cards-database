import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-69",
	localId: 69,

	// Card informations
	name: {
		en: "M Charizard-EX",
		fr: "M Dracaufeu-EX",
	},

	hp: 230,

	type: [
		Type.DRAGON,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/69/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/69/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/69/high.png",
		},
	},

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
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
			Type.FIRE,
			Type.FIRE,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Blaze",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "Discard the top 5 cards of your deck.",
		},
		damage: 300
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Feu Furieux",
		},
		text: {
			fr: "Défaussez les 5 cartes du dessus de votre deck.",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

