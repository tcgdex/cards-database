import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-123",
	localId: 123,

	// Card informations
	name: {
		en: "Aron",
		fr: "Galekid",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Rigidify",
			fr: "Solidification",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
		},
		damage: 20
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
