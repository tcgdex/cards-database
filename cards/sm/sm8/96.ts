import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-96",
	localId: 96,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Hunt",
			fr: "Chasse Express",
		},
		text: {
			en: "If you go first, you can use this attack on your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
		},
	}],





	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
