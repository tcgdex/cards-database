import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-163",
	localId: 163,

	// Card informations
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 784,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/163/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/163/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/163/high",
		},
	},

	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shout of Power",
			fr: "Cri de Puissance",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 60
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Scaly Uppercut",
			fr: "Uppercut Écaillé",
		},
		text: {
			en: "You may discard a Pokémon Tool card from this Pokémon. If you do, this attack does 90 more damage.",
			fr: "Vous pouvez défausser une carte Outil Pokémon de ce Pokémon. Dans ce cas, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
