import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-7",
	localId: 7,

	// Card informations
	name: {
		en: "Carnivine",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 455,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
		},
		text: {
			en: "Before doing damage, count the remaining HP of the Defending Pokémon and Carnivine. If the Defending Pokémon has fewer remaining HP than Carnivine's, this attack does 60 damage instead.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Wring Out",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
