import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-84",
	localId: 84,

	// Card informations
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	hp: 40,

	type: [
		Type.FAIRY,
	],

	dexId: 669,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/84/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/84/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Secret Blessings",
			fr: "Bénédictions Secrètes",
		},
		text: {
			en: "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
			fr: "Choisissez une combinaison de 3 Pokémon et Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

