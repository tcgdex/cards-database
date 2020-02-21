import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-13",
	localId: 13,

	// Card informations
	name: {
		en: "Umbreon",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/13/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Feint Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers or any other effects on the Defending Pokémon.",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
