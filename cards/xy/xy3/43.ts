import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 623,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/43/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/43/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/43/high",
		},
	},

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
			fr: "Anéantissement",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 60 more damage. Discard that Stadium card.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires. Défaussez la carte Stade.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Golurk Hammer",
			fr: "Maillet Golemastoc",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
