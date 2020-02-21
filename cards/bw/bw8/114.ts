import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-114",
	localId: 114,

	// Card informations
	name: {
		en: "Bouffalant",
		fr: "Frison",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 626,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/114/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/114/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tool Breaker",
			fr: "Bris’Outil",
		},
		text: {
			en: "Discard a Pokémon Tool card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
