import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Kadabra",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 64,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/84/high",
		},
	},

	evolveFrom: {
		en: "Abra",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Recall",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1).",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
