import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-152",
	localId: 152,

	// Card informations
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 113,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/152/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/152/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/152/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/152/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Healing Pirouette",
			fr: "Pirouette Apaisante",
		},
		text: {
			en: "Heal 20 damage from each of your Pokémon.",
			fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sympathetic Slap",
			fr: "Gifle Cordiale",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it before this attack does damage, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
