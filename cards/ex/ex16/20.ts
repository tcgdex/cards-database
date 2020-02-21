import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-20",
	localId: 20,

	// Card informations
	name: {
		en: "Omastar",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/20/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pull Down",
		},
		text: {
			en: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydrocannon",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
