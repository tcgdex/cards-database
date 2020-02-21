import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-53",
	localId: 53,

	// Card informations
	name: {
		en: "Light Venomoth",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/53/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 103,
		name: "Masako Yamashita"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Mysterious Wing",
		},
		text: {
			en: "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Synchronize",
		},
		text: {
			en: "If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
