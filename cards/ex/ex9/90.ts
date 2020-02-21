import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-90",
	localId: 90,

	// Card informations
	name: {
		en: "Altaria ex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/90/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 437,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mist",
		},
		text: {
			en: "Any damage done to Altaria ex by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dive",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Mist",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 70
	}],







	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
