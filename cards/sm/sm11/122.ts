import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-122",
	localId: 122,

	// Card informations
	name: {
		en: "Terrakion",
		fr: "Terrakium",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 639,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cavern Counter",
			fr: "Marqueur des Grottes",
		},
		text: {
			en: "If all of your Benched Pokémon have at least 1 damage counter on them, this attack does 150 more damage.",
			fr: "Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
