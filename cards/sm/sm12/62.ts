import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-62",
	localId: 62,

	// Card informations
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 746,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/62/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/62/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/62/high.png",
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

	abilities: [{
		id: 954,
		type: AbilityType.TALENT,
		name: {
			en: "Scatter",
			fr: "Éparpillement",
		},
		text: {
			en: "At the end of your opponent's turn, if this Pokémon has any damage counters on it, flip a coin. If tails, shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "À la fin du tour de votre adversaire, si ce Pokémon a des marqueurs de dégâts, lancez une pièce. Si c’est pile, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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

