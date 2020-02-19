import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-78",
	localId: 78,

	// Card informations
	name: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 519,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/78/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/78/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Homing Pidove",
			fr: "Poichigeon Voyageur",
		},
		text: {
			en: "Look at the top card of your deck. Then, you may shuffle your deck.",
			fr: "Regardez la carte du dessus de votre deck. Ensuite, vous pouvez mélanger votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

