import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM63",
	localId: "SM63",

	// Card informations
	name: {
		en: "Salazzle-GX",
	},

	hp: 200,

	type: [
		Type.FIRE,
	],

	dexId: 758,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM63/high",
		},
	},

	evolveFrom: {
		en: "Salandit",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Diabolical Claws",
		},
		text: {
			en: "This attack does 50 damage for each Prize card you have taken.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Heat Blast",
		},
		damage: 110
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Queen's Haze-GX",
		},
		text: {
			en: "Discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
