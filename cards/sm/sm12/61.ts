import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-61",
	localId: 61,

	// Card informations
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frozen Wings",
			fr: "Ailes Gelées",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dazzling Blizzard",
			fr: "Blizzard Éblouissant",
		},
		text: {
			en: "If you have any Stadium card in play, this attack does 100 more damage.",
			fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
