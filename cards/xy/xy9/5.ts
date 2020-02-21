import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-5",
	localId: 5,

	// Card informations
	name: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 401,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bug Hunch",
			fr: "Insec'tuition",
		},
		text: {
			en: "Search your deck for up to 3 Grass Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 3 Pokémon Grass dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
