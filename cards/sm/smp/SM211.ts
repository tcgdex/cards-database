import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM211",
	localId: "SM211",

	// Card informations
	name: {
		en: "Charizard-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM211/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM211/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
		},
		damage: 140
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flare Blitz GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
