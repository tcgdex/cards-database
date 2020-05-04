import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-176",
	localId: 176,

	// Card informations
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 521,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/176/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/176/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/176/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/176/high",
		},
	},

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Downburst",
			fr: "Rafale Descendante",
		},
		text: {
			en: "You may have each player shuffle all cards attached to their Active Pokémon into their deck.",
			fr: "Vous pouvez demander à chaque joueur de mélanger toutes les cartes attachées à son Pokémon Actif avec son deck.",
		},
		damage: 90
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
