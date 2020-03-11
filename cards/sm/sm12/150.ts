import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-150",
	localId: 150,

	// Card informations
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 669,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/150/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/150/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/150/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Petal Blizzard",
			fr: "Tempête Florale",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
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
