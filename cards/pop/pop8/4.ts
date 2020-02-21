import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-4",
	localId: 4,

	// Card informations
	name: {
		en: "Probopass",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/4/high",
		},
	},

	evolveFrom: {
		en: "Nosepass",
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
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Nose",
		},
		text: {
			en: "Flip 3 coins. This attack does 50 damage plus 20 more damage for each heads.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
