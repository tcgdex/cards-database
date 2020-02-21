import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Articuno",
		fr: "Artikodin",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Find Ice",
			fr: "Chercheur de Glace",
		},
		text: {
			en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 3 cartes Énergie Water dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Freezing Wind",
			fr: "Vent Glaçant",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
