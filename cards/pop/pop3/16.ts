import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Pichu Bros.",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 172,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Bustle",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads. If either coin is heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
