import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-105",
	localId: 105,

	// Card informations
	name: {
		en: "Charizard ex",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/105/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},

	abilities: [{
		id: 959,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Flame",
		},
		text: {
			en: "All Energy attached to Charizard ex are Fire Energy instead of its usual type.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Burn Down",
		},
		text: {
			en: "Discard 5 Fire Energy attached to Charizard ex. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, and any other effects on the Defending Pokémon.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	},{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
