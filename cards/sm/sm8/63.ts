import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-63",
	localId: 63,

	// Card informations
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Field Crush",
			fr: "Broyeur de Terrain",
		},
		text: {
			en: "If your opponent has a Stadium card in play, discard it.",
			fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Freezing Flames",
			fr: "Flammes Glaçantes",
		},
		text: {
			en: "If this Pokémon has any Fire Energy attached to it, this attack does 80 more damage.",
			fr: "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
