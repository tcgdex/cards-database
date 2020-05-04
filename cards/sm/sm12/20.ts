import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-20",
	localId: 20,

	// Card informations
	name: {
		en: "Decidueye",
		fr: "Archéduc",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 724,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/20/high",
		},
	},

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
		},
		text: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tracking Shot",
			fr: "Tir Suivi",
		},
		text: {
			en: "This attack does 80 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 80 dégâts à l’un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
