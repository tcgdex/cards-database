import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Giovanni's Nidorina",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/44/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♀",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting Tackle",
		},
		text: {
			en: "Giovanni's Nidorina does 20 damage to itself. Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
