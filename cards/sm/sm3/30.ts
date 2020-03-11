import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/30/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Arrow",
			fr: "Flèche d’Eau",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
