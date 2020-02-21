import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-44",
	localId: 44,

	// Card informations
	name: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/44/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Nido Press",
			fr: "Charge Nido",
		},
		text: {
			en: "If Nidorina is on your Bench, this attack does 40 more damage.",
			fr: "Si Nidorina est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
