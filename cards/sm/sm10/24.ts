import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-24",
	localId: 24,

	// Card informations
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 555,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/24/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/24/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/24/high",
		},
	},

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Find Wildfire",
			fr: "Traqueur de Feu de Forêt",
		},
		text: {
			en: "Search your deck for up to 3 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
		},
		text: {
			en: "Discard all Fire Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie Fire de ce Pokémon.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
