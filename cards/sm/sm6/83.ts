import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-83",
	localId: 83,

	// Card informations
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 669,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 1026,
		type: AbilityType.TALENT,
		name: {
			en: "Evolutionary Advantage",
			fr: "Avantage Évolutif",
		},
		text: {
			en: "If you go second, this Pokémon can evolve during your first turn.",
			fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
