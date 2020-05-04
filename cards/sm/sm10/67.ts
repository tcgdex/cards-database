import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-67",
	localId: 67,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 92,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "chibi",

	abilities: [{
		id: 102,
		type: AbilityType.TALENT,
		name: {
			en: "Swelling Spite",
			fr: "Mépris Montant",
		},
		text: {
			en: "When this Pokémon is Knocked Out, search your deck for up to 2 Haunter and put them onto your Bench. Then, shuffle your deck.",
			fr: "Lorsque ce Pokémon est mis K.O., cherchez jusqu’à 2 Spectrum dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 20
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
