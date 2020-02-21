import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-23",
	localId: 23,

	// Card informations
	name: {
		en: "Ledian",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/23/high",
		},
	},

	evolveFrom: {
		en: "Ledyba",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 1236,
		type: AbilityType.POKEBODY,
		name: {
			en: "Powder Protection",
		},
		text: {
			en: "Any damage done to Ledian by attacks from Pokémon that has an owner in its name is reduced by 40.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Split Spiral Punch",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
