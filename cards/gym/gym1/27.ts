import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Lt. Surge's Electabuzz",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 125,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/27/high",
		},
	},

	evolveFrom: {
		en: "Elekid",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge",
		},
		text: {
			en: "Take up to 2 Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Electric Current",
		},
		text: {
			en: "Take 1 Energy card attached to Lt. Surge's Electabuzz and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
