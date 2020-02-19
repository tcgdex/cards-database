import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-35",
	localId: 35,

	// Card informations
	name: {
		en: "Numel",
		fr: "Chamallot",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 322,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/35/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/35/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/35/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flare Bonus",
			fr: "Bonus d'intimidation",
		},
		text: {
			en: "Discard a Fire Energy card from your hand. Then, draw 3 cards.",
			fr: "Défaussez une carte Énergie Fire de votre main. Ensuite, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

