import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ru1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Lucario",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/ru1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/ru1/12/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pulse Blast",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Pokémon Rumble",
		code: "ru1"
	}
}

export default card
