import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-88",
	localId: 88,

	// Card informations
	name: {
		en: "Munna",
		fr: "Munna",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 517,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 4 cards of either player's deck and put them back in any order.",
			fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
