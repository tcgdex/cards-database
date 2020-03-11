import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-109",
	localId: 109,

	// Card informations
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/109/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "SATOSHI NAKAI",

	abilities: [{
		id: 1378,
		type: AbilityType.TALENT,
		name: {
			en: "Obnoxious Whirring",
			fr: "Odieux Bourdonnement",
		},
		text: {
			en: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
