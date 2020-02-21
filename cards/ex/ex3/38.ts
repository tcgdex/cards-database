import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-38",
	localId: 38,

	// Card informations
	name: {
		en: "Ninjask",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/38/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Wing",
		},
		text: {
			en: "This attack's damage is not affected by Resistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
