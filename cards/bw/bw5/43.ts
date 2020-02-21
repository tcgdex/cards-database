import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-43",
	localId: 43,

	// Card informations
	name: {
		en: "Galvantula",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 596,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/43/high",
		},
	},

	evolveFrom: {
		en: "Joltik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Quick Turn",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electrisilk",
		},
		text: {
			en: "If the Defending Pokémon has no Retreat Cost, this attack does 40 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
