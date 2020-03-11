import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-40",
	localId: 40,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/40/high",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dwindling Wave",
			fr: "Vague Faiblissante",
		},
		text: {
			en: "This attack does 40 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
