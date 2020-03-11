import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 548,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/9/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/9/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Magical Leaf",
			fr: "Feuillemagik",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage and heal 10 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires et vous soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
