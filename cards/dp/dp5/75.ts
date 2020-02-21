import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-75",
	localId: 75,

	// Card informations
	name: {
		en: "Starly",
		fr: "Étourmi",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 396,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/75/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/75/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
