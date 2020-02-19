import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-53",
	localId: 53,

	// Card informations
	name: {
		en: "Buneary",
		fr: "Laporeille",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 427,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/53/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/53/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/53/high.png",
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
		name: {
			en: "Drawup Power",
			fr: "Pouvoir bloquant",
		},
		text: {
			en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Extend Ears",
			fr: "Oreilles extensibles",
		},
		text: {
			en: "Remove 1 damage counter from each of your Benched Pokémon.",
			fr: "Retirez 1 marqueur de dégât à chacun des Pokémon de votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

