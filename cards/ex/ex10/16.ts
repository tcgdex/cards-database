import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-16",
	localId: 16,

	// Card informations
	name: {
		en: "Sunflora",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 192,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/16/high",
		},
	},

	evolveFrom: {
		en: "Sunkern",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Dazzle Dance",
		},
		text: {
			en: "Each Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Green Blast",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
