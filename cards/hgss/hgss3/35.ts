import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-35",
	localId: 35,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Tenefix",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/35/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/35/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Pull Out",
			fr: "Déraciner",
		},
		text: {
			en: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
			fr: "Cherchez une carte dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Hand",
			fr: "Main sombre",
		},
		text: {
			en: "If you have more cards in your hand than your opponent, this attack does 20 damage plus 30 more damage.",
			fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
