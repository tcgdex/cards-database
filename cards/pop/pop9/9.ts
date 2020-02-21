import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-9",
	localId: 9,

	// Card informations
	name: {
		en: "Lopunny",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 428,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/9/high",
		},
	},

	evolveFrom: {
		en: "Bastiodon",
	},

	tags: [
		Tag.BASIC,
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
			en: "Jump Kick",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jazzed",
		},
		text: {
			en: "If Lopunny evolved from Buneary during this turn, remove all damage counters from Lopunny.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
