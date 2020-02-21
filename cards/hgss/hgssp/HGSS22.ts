import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS22",
	localId: "HGSS22",

	// Card informations
	name: {
		en: "Porygon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stiffen",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Porygon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Version Update",
		},
		text: {
			en: "Search your deck for Porygon2, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
