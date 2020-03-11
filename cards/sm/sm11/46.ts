import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-46",
	localId: 46,

	// Card informations
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 615,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Frozen Lock",
			fr: "Blocage Givrant",
		},
		text: {
			en: "Your opponent can't play any Item cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
