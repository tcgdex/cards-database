import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-45",
	localId: 45,

	// Card informations
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 83,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leek Slap",
			fr: "Coup d’Oignon",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
