import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-9",
	localId: 9,

	// Card informations
	name: {
		en: "Forretress",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/9/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Blow",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads. If both coins are heads, switch Forretress with 1 of your Benched Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scatterbomb",
		},
		text: {
			en: "Flip 2 coins. For each heads, do 10 damage to each of your opponent's Benched Pokémon. For each tails, do 10 damage to each of your own Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
