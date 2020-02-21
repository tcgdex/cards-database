import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-2",
	localId: 2,

	// Card informations
	name: {
		en: "Crobat δ",
	},

	hp: 90,

	type: [
		Type.GRASS,
		Type.METAL,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/2/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Radar Jam",
		},
		text: {
			en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Target Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
