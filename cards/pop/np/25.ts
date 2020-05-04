import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-25",
	localId: 25,

	// Card informations
	name: {
		en: "Flygon",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/25/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Pit",
		},
		text: {
			en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragonbreath",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
