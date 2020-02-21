import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-13",
	localId: 13,

	// Card informations
	name: {
		en: "Wigglytuff",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/13/high",
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

	abilities: [{
		id: 987,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fluffy Fur",
		},
		text: {
			en: "If Wigglytuff is your Active Pokémon and is damaged by an opponent's attack (even if Wigglytuff is Knocked Out), the Attacking Pokémon is now Asleep.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
		},
		text: {
			en: "Draw 3 cards.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 20 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
