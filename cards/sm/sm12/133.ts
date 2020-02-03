import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-133",
	localId: 133,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/133/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/133/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/133/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/133/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ominous News",
			fr: "Mauvais Augure",
		},
		text: {
			en: "Discard a Special Energy from 1 of your opponent's Pokémon.",
			fr: "Défaussez une Énergie spéciale de l’un des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dirty Throw",
			fr: "Vilain Lancer",
		},
		text: {
			en: "Discard a card from your hand. If you can't discard a card, this attack does nothing.",
			fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

