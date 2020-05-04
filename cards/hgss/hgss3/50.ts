import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-50",
	localId: 50,

	// Card informations
	name: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/50/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/50/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sticky Liquid",
			fr: "Liquide gluant",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless more.",
			fr: "Pendant le prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est augmenté de Colorless.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Toss",
			fr: "Décision vaseuse",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
