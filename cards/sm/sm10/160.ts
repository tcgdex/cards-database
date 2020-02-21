import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-160",
	localId: 160,

	// Card informations
	name: {
		en: "Purugly",
		fr: "Chaffreux",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 432,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/160/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/160/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/160/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/160/high",
		},
	},

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stray Cat Dash",
			fr: "Fuite du Chat Perdu",
		},
		text: {
			en: "Discard a random card from your opponent's hand. If this Pokémon evolved from Glameow during this turn, discard 2 cards instead of 1.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire. Si ce Pokémon a évolué de Chaglam pendant ce tour, défaussez 2 cartes au lieu d’une.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunge Out",
			fr: "Allonger",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
