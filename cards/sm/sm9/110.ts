import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-110",
	localId: 110,

	// Card informations
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 707,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",

	abilities: [{
		id: 1320,
		type: AbilityType.TALENT,
		name: {
			en: "Key of Secrets",
			fr: "Clé des Secrets",
		},
		text: {
			en: "Each of your Metal Pokémon's Resistance is now -40.",
			fr: "La Résistance de chacun de vos Pokémon Metal est maintenant -40.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
