import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-92",
	localId: 92,

	// Card informations
	name: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 629,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 10
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card
