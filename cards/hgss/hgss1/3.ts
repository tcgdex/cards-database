import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/3/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/3/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/3/high",
		},
	},

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Power",
			fr: "Pouvoir de fée",
		},
		text: {
			en: "Return 1 of your Pokémon and all cards attached to it to your hand.",
			fr: "Reprenez un de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Impact",
			fr: "Impact lunaire",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
