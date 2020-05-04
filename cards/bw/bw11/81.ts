import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-81",
	localId: 81,

	// Card informations
	name: {
		en: "Gallade",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/81/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Nerve Shot",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pandemonium Blade",
		},
		text: {
			en: "Does 20 more damage for each of your Benched Pokémon that has any damage counters on it.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
