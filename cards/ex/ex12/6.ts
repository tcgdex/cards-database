import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-6",
	localId: 6,

	// Card informations
	name: {
		en: "Golem",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/6/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mend",
		},
		text: {
			en: "Search your discard pile for a Fighting Energy card and attach it to Golem. If you do, remove 2 damage counters from Golem.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Enraged Linear Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Golem to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
