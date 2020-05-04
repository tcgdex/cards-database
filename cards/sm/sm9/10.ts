import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-10",
	localId: 10,

	// Card informations
	name: {
		en: "Shaymin ◇",
		fr: "Shaymin ",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Flower Storm",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "This attack does 30 damage times the amount of basic Energy attached to all of your Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			fr: "Tempête de Fleurs",
		},
		text: {
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
