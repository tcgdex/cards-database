import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-6",
	localId: 6,

	// Card informations
	name: {
		en: "Buizel",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Whirlpool",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Super Fast",
		},
		text: {
			en: "If you have Pachirisu in play, flip a coin. If heads, prevent all effects of an attack, including damage, done to Buizel during your opponent's next turn.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
