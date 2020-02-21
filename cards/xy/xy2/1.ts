import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 10,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/1/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/1/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 608,
		type: AbilityType.TALENT,
		name: {
			en: "Adaptive Evolution",
			fr: "Évolution Adaptative",
		},
		text: {
			en: "This Pokémon can evolve during your first turn or the turn you play it.",
			fr: "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
