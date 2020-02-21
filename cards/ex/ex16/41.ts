import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-41",
	localId: 41,

	// Card informations
	name: {
		en: "Vigoroth",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 288,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/41/high",
		},
	},

	evolveFrom: {
		en: "Slakoth",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 13,
		type: AbilityType.POKEBODY,
		name: {
			en: "Strikes Back",
		},
		text: {
			en: "If Vigoroth is your Active Pokémon and is damaged by an opponent's attack (even if Vigoroth is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
