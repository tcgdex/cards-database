import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Steenee",
		fr: "Candine",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 762,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/19/high",
		},
	},

	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
