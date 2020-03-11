import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-17",
	localId: 17,

	// Card informations
	name: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 722,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hide and Seek",
			fr: "Cache-Cache",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
