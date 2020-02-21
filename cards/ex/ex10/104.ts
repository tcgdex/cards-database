import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-104",
	localId: 104,

	// Card informations
	name: {
		en: "Ho-Oh ex",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 149,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Golden Wing",
		},
		text: {
			en: "If Ho-Oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-Oh ex to your Pokémon in any way you like.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Burn",
		},
		text: {
			en: "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-Oh ex.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
