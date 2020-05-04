import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Brock's Geodude",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Lucky Shot",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon and flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) This attack can't be used if your opponent has no Benched Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
