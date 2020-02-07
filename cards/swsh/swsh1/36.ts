import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Cinderace",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/36/high.png",
		},
	},

	evolveFrom: {
		en: "Raboot",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Cloak",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
		},
		text: {
			en: "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

