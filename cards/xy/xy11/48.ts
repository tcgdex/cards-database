import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-48",
	localId: 48,

	// Card informations
	name: {
		en: "Litwick",
		fr: "Funécire",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 607,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slightly Simmer",
			fr: "Léger Frémissement",
		},
		text: {
			en: "Search your deck for up to 2 cards and discard them. Shuffle your deck afterward.",
			fr: "Cherchez jusqu’à 2 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
