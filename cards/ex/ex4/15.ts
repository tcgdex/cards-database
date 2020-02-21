import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-15",
	localId: 15,

	// Card informations
	name: {
		en: "Team Aqua's Mightyena",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mystic Fang",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Confused.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
