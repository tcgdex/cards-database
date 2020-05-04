import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-79",
	localId: 79,

	// Card informations
	name: {
		en: "Passimian",
		fr: "Quartermac",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 766,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/79/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/79/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punch",
			fr: "Koud’Poing",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Intentional Grounding",
			fr: "Mauvais Lancer",
		},
		text: {
			en: "Discard a Pokémon Tool card from your hand. If you don't, this attack does nothing.",
			fr: "Défaussez une carte Outil Pokémon de votre main. Sinon, cette attaque ne fait rien.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
