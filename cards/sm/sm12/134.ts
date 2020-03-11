import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-134",
	localId: 134,

	// Card informations
	name: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 624,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/134/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/134/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bag Slash",
			fr: "Sac Lacéré",
		},
		text: {
			en: "Your opponent reveals their hand. Discard an Item card you find there.",
			fr: "Votre adversaire dévoile sa main. Défaussez une carte Objet que vous y trouvez.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Sting",
			fr: "Dard",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
