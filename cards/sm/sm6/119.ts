import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-119",
	localId: 119,

	// Card informations
	name: {
		en: "Palkia-GX",
		fr: "Palkia-GX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/119/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Spatial Control",
			fr: "Contrôle Spatial",
		},
		text: {
			en: "Move any number of Energy from your Benched Pokémon to this Pokémon.",
			fr: "Déplacez autant d’Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pressure",
			fr: "Pression Hydroélectrique",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zero Vanish-GX",
			fr: "Zéro Disparaissant-GX",
		},
		text: {
			en: "Shuffle all Energy from each of your opponent's Pokémon into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Mélangez l’Énergie de chacun des Pokémon de votre adversaire avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
