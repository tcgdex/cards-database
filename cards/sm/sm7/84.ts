import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-84",
	localId: 84,

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
			en: "https://assets.tcgdex.net/en/sm/sm7/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		name: {
			en: "Call for the Boss",
			fr: "Appel au Boss",
		},
		text: {
			en: "Search your deck for Alolan Raticate or Alolan Raticate-GX, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez un Rattatac d’Alola ou un Rattatac d’Alola-GX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
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

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
