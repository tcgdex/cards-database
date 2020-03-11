import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-41",
	localId: 41,

	// Card informations
	name: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 366,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

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
			Type.WATER
		],
		name: {
			en: "Sparkling Pearl",
			fr: "Perle Étincelante",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
