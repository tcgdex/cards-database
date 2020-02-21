import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-71",
	localId: 71,

	// Card informations
	name: {
		en: "Zoroark",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/71/high",
		},
	},

	evolveFrom: {
		en: "Zorua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brutal Bash",
		},
		text: {
			en: "Does 20 damage times the number of Darkness Pokémon you have in play.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dark Rush",
		},
		text: {
			en: "Does 20 damage times the number of damage counters on this Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
