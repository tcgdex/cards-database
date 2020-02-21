import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-24",
	localId: 24,

	// Card informations
	name: {
		en: "M Manectric-EX",
	},

	hp: 210,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/24a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/24a/high",
		},
	},

	evolveFrom: {
		en: "Manectric-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Turbo Bolt",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
