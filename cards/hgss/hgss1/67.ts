import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Hoppip",
		fr: "Granivol",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 187,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/67/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/67/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bounce",
			fr: "Faire des bonds",
		},
		text: {
			en: "You may switch Hoppip with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Granivol contre un Pokémon de votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
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
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
