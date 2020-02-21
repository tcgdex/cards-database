import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Clefable",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/1/high",
		},
	},

	evolveFrom: {
		en: "Clefairy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Metronome",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefable's type is still Colorless.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Minimize",
		},
		text: {
			en: "All damage done by attacks to Clefable during your opponent's next turn is reduce by 20 (after applying Weakness and Resistance).",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
