import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-37",
	localId: 37,

	// Card informations
	name: {
		en: "Kabuto",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 970,
		type: AbilityType.POKEBODY,
		name: {
			en: "Thick Shell",
		},
		text: {
			en: "All damage done by attacks to Kabuto from Evolved Pokémon is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
