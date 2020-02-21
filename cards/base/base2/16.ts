import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Wigglytuff",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/16/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
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
			en: "Lullaby",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Do the Wave",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each of your Benched Pokémon.",
		},
		damage: 10
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
