import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss3/50/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/50/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/50/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

