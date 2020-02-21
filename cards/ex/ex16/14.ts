import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-14",
	localId: 14,

	// Card informations
	name: {
		en: "Dusclops",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/14/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Dark Mind",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Light",
		},
		text: {
			en: "If Phoebe's Stadium is in play, the Defending Pokémon is now Confused.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
