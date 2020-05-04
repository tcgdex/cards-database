import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-18",
	localId: 18,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Friends",
			fr: "Force de l’Amitié",
		},
		text: {
			en: "If you have any Stage 2 Pokémon on your Bench, this attack does 90 more damage.",
			fr: "Si vous avez au moins un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
