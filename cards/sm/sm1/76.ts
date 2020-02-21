import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 19,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
