import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-13",
	localId: 13,

	// Card informations
	name: {
		en: "Rapidash",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/13/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 941,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fiery Aura",
		},
		text: {
			en: "As long as Rapidash is your Active Pokémon, put 4 damage counters instead of 2 on Burned Pokémon between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
