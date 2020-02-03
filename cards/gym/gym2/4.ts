import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Erika's Venusaur",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/4/high.png",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Growth",
		},
		text: {
			en: "Flip a coin. If heads, you may attach up to 2 Energy cards from your hand to Erika's Venusaur.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Wide Solarbeam",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose 2 of them (or 1 if he or she has only 1). This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card

