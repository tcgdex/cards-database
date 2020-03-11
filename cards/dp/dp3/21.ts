import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-21",
	localId: 21,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/21/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/21/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/21/high",
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
			en: "Baleful Wind",
			fr: "Vent menaçant",
		},
		text: {
			en: "Choose a card from your opponent's hand without looking and discard it. If you discarded a Trainer, Supporter, or Stadium card, choose 1 more card from your opponent's hand without looking and discard it.",
			fr: "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la. Si vous avez défaussé une carte Dresseur, Supporter ou Stade, choisissez sans regarder 1 autre carte de la main de votre adversaire et défaussez-la.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Raid",
			fr: "Razzia obscure",
		},
		text: {
			en: "If you played Absol from your hand during this turn, this attack's base damage is 40 instead of 10.",
			fr: "Si vous avez joué Absol de votre main lors de ce tour, les dégâts de base de cette attaque sont de 40 au lieu de 10.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
