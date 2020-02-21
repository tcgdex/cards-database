import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-5",
	localId: 5,

	// Card informations
	name: {
		en: "Dugtrio",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/5/high",
		},
	},

	evolveFrom: {
		en: "Diglett",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 1103,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sand Veil",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dig Under",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Dugtrio does 10 damage to itself.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
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
