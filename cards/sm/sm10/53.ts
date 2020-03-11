import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-53",
	localId: 53,

	// Card informations
	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 771,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Asako Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Fist",
			fr: "Poing Surprise",
		},
		text: {
			en: "You and your opponent play Rock-Paper-Scissors. If you win, this attack does 60 more damage.",
			fr: "Jouez à pierre-ciseaux-feuille avec votre adversaire. Si vous gagnez, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
