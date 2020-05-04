import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Brock's Geodude",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Call for Friend",
		},
		text: {
			en: "Flip a coin. If heads, you may search your deck for a Basic Pokémon card with Brock in its name and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hook Shot",
		},
		text: {
			en: "Don't apply Resistance for this attack. (Any other effects that would happen after applying Resistance still happen.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
