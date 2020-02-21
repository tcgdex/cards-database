import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Dig Out",
			fr: "Excavation",
		},
		text: {
			en: "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
			fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal'Korne",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
