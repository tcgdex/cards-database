import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-154",
	localId: 154,

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/154/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/154/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/154/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/154/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",

	abilities: [{
		id: 1141,
		type: AbilityType.TALENT,
		name: {
			en: "Unnerve",
			fr: "Tension",
		},
		text: {
			en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.METAL
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
