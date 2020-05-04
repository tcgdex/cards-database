import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-71",
	localId: 71,

	// Card informations
	name: {
		en: "Zoroark",
		fr: "Zoroark",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/71/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/71/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/71/high",
		},
	},

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte dans votre deck et ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Foul Play",
			fr: "Tricherie",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks and use it as this attack.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur et utilisez-la à la place de cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
