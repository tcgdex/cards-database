import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-89",
	localId: 89,

	// Card informations
	name: {
		en: "Walrein ex",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/89/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},

	abilities: [{
		id: 156,
		type: AbilityType.POKEBODY,
		name: {
			en: "Icy Aura",
		},
		text: {
			en: "As long as Walrein ex is your Active Pokémon, put 1 damage count on each Active Pokémon (both yours and your opponent's) between turns, excluding Water Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Arrow",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],







	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
