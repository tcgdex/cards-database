import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-108",
	localId: 108,

	// Card informations
	name: {
		en: "Latios ◇",
		fr: "Latios ",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/108/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/108/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Fleet",
			fr: "Flotte des Dragons",
		},
		text: {
			en: "This attack does 50 damage for each of your Evolution Dragon Pokémon in play.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Dragon évolués en jeu.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
