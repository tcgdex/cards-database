import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-159",
	localId: 159,

	// Card informations
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 431,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/159/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/159/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/159/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/159/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Caturday",
			fr: "Chamedi",
		},
		text: {
			en: "Draw a card. If you do, this Pokémon is now Asleep.",
			fr: "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boing Boing Tail",
			fr: "Queue Ressort",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon-GX or Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
