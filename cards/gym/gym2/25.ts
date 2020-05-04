import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Koga's Arbok",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/25/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Buildup",
		},
		text: {
			en: "Koga's Arbok is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Poison Powder",
		},
		text: {
			en: "If Koga's Arbok is Poisoned, this attack's base damage is 40 instead of 20 and the Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
