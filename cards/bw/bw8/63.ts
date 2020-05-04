import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-63",
	localId: 63,

	// Card informations
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 568,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/63/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/63/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pile Up",
			fr: "Amoncellement",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, cherchez une carte Outil Pokémon dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Toss",
			fr: "Giclée Vaseuse",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
