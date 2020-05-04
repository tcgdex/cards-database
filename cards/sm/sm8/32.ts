import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-32",
	localId: 32,

	// Card informations
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/32/high",
		},
	},

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Commanding Queen",
			fr: "Reine Imposante",
		},
		text: {
			en: "If you have 4 or fewer Grass Pokémon on your Bench, this attack does nothing.",
			fr: "Si vous avez 4 Pokémon Grass ou moins sur votre Banc, cette attaque ne fait rien.",
		},
		damage: 120
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
