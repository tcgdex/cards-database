import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-47",
	localId: 47,

	// Card informations
	name: {
		en: "Entei",
		fr: "Entei",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Eruption",
			fr: "Éruption",
		},
		text: {
			en: "Each player discards the top card of their deck. This attack does 60 more damage for each Energy card discarded in this way.",
			fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
